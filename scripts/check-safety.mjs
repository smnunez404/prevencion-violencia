#!/usr/bin/env node
// Verifica las reglas duras de specs/constitution.md sobre el código y el contenido.
// Falla con código 1 si encuentra una violación. Se corre en `npm run verify` y en CI.
//
// Para una excepción justificada, agrega en la misma línea:  // safety-ok: <razón>

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app/src", "content"];
const CODE_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

const RULES = [
  {
    id: "I-identidad-de-nino",
    // Identificadores que implican identidad individual de un menor.
    pattern: /\b(student_?id|child_?id|alumno_?id|nino_?id|niño_?id|pupil_?id|studentName|childName|nombreAlumno|nombreNino)\b/i,
    message:
      "Identidad individual de un niño. El progreso es por aula (classroom), no por estudiante. Constitución I.",
  },
  {
    id: "I-tabla-de-ninos",
    pattern: /\b(interface|type|class|table|collection)\s+(Student|Child|Alumno|Nino|Pupil)s?\b/,
    message:
      "Entidad de niño individual. No debe existir ese modelo de datos. Constitución I.",
  },
  {
    id: "II-texto-libre-sobre-menor",
    pattern: /\b(relato|testimonio|incidentReport|reporteIncidente|whatTheChildSaid|loQueDijo)\b/i,
    message:
      "Campo que capturaría lo que un niño contó. La app no recibe revelaciones. Constitución II.",
  },
  {
    id: "II-sin-chat",
    pattern: /\b(chatRoom|ChatMessage|sendMessage|messageThread|salaDeChat)\b/,
    message: "Funcionalidad de chat. No existe chat en este producto. Constitución II.",
  },
  {
    id: "III-marcado-de-riesgo",
    pattern: /\b(riskScore|riskLevel|nivelRiesgo|puntajeRiesgo|flagAtRisk|enRiesgo)\b/i,
    message:
      "Marcado de riesgo. No se diagnostica ni se etiqueta a un niño ni a un aula. Constitución III.",
  },
  {
    id: "V-castigo-y-puntaje",
    pattern: /\b(leaderboard|highScore|tablaDePosiciones|puntajeTotal|streakCount|rachaDias)\b/i,
    message:
      "Puntaje competitivo o racha. Sin ranking, sin castigo, sin humillación. Constitución V.",
  },
];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === "dist" || entry.startsWith(".")) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const violations = [];

// 1. Reglas de patrón sobre el código fuente.
for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    if (!CODE_EXT.has(extname(file))) continue;
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      if (line.includes("safety-ok:")) return;
      for (const rule of RULES) {
        if (rule.pattern.test(line)) {
          violations.push({
            file: relative(ROOT, file),
            line: i + 1,
            rule: rule.id,
            message: rule.message,
            snippet: line.trim().slice(0, 120),
          });
        }
      }
    });
  }
}

// 2. Reglas de privacidad sobre cada episodio de contenido.
const episodesDir = join(ROOT, "content", "episodes");
if (existsSync(episodesDir)) {
  for (const file of readdirSync(episodesDir).filter((f) => f.endsWith(".json"))) {
    const full = join(episodesDir, file);
    let data;
    try {
      data = JSON.parse(readFileSync(full, "utf8"));
    } catch (err) {
      violations.push({
        file: relative(ROOT, full),
        line: 0,
        rule: "contenido-json-invalido",
        message: `JSON inválido: ${err.message}`,
        snippet: "",
      });
      continue;
    }
    const privacy = data.privacy ?? {};
    if (privacy.persistChoices !== false) {
      violations.push({
        file: relative(ROOT, full),
        line: 0,
        rule: "I-persistChoices",
        message: "privacy.persistChoices debe ser false. Solo persisten flags de progreso.",
        snippet: `persistChoices: ${JSON.stringify(privacy.persistChoices)}`,
      });
    }
    for (const flag of data.progressFlags ?? []) {
      if (typeof flag.id === "string" && /nombre|name|relato|nino|niño/i.test(flag.id)) {
        violations.push({
          file: relative(ROOT, full),
          line: 0,
          rule: "I-flag-personal",
          message: `El flag "${flag.id}" sugiere dato personal. Los flags son de progreso del aula.`,
          snippet: flag.id,
        });
      }
    }
  }
}

if (violations.length === 0) {
  console.log("check:safety — sin violaciones.");
  process.exit(0);
}

console.error(`check:safety — ${violations.length} violación(es):\n`);
for (const v of violations) {
  const loc = v.line ? `${v.file}:${v.line}` : v.file;
  console.error(`  [${v.rule}] ${loc}`);
  console.error(`    ${v.message}`);
  if (v.snippet) console.error(`    > ${v.snippet}`);
  console.error("");
}
console.error("Si es un falso positivo, agrega en esa línea: // safety-ok: <razón>");
process.exit(1);
