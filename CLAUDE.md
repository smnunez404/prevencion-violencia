# CLAUDE.md

@AGENTS.md

## Modo desarrollo

Este repo tiene dos modos. `AGENTS.md` cubre el **modo memoria** (wiki). Esto cubre el **modo desarrollo**.

Antes de escribir código, lee en este orden:
1. [specs/constitution.md](specs/constitution.md) — reglas que no se negocian.
2. La spec de la tarea en `specs/NNN-*/spec.md`.
3. [wiki/project/plan-implementacion.md](wiki/project/plan-implementacion.md) — módulos, sprints y stack.

## Reglas duras (se verifican con `npm run check:safety`, no solo con buena fe)

- **No existe identidad de niño.** Nada de `studentId`, `childId`, `alumnoId`, tablas o tipos `Student`/`Child`. El progreso es por **aula**.
- **No se guarda lo que un niño dice.** Ningún campo de texto libre sobre un menor, en el juego ni en el panel.
- **No hay chat.** Ni entre niños, ni con adultos, ni con un modelo.
- **No se marca a un niño como "en riesgo".** El panel mide preparación del adulto y progreso del aula.
- **`persistChoices` siempre en `false`.** Solo persisten flags de progreso.
- El contenido dirigido a niños que no esté aprobado por Arianna va detrás de un flag y marcado `[VALIDAR]`.

Si una tarea parece exigir romper una de estas, para y pregunta. No la implementes "temporalmente".

## Verificación antes de dar algo por hecho

```bash
npm run verify    # typecheck + lint + test + check:safety + build
```

Ningún trabajo está terminado si `verify` no pasa. No lo saltes, no uses `--no-verify`.

## Convenciones de código

- TypeScript estricto. Nada de `any` sin comentario que lo justifique.
- `app/src/engine/` es TypeScript puro: **sin DOM, sin React, sin Three**. Es lo que se porta a React Native después.
- El contenido narrativo vive en `content/episodes/*.json`, nunca hardcodeado en componentes.
- Los assets 3D se referencian por el registro en `app/src/shared/assets.ts`, nunca por ruta literal.
- Español en UI, contenido y commits. Identificadores en inglés.
