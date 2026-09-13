# Wiki article template

```markdown
---
title: Nombre de la página
type: entity | concept | product | decision | source-summary
updated: YYYY-MM-DD
status: seed | draft | stable | superseded
sources: Autor o medio, YYYY-MM-DD
raw: [archivo](../../raw/carpeta/archivo.md)
---

# Nombre de la página

Párrafo de tesis (qué es esto y por qué importa al MVP).

## Hechos

- Dato con atribución.

## Tensiones

- Si una fuente contradice otra, anotarlo aquí con ambos lados.

## See also

- [Página relacionada](../project/otra.md)
```

Desde `wiki/<tema>/` hacia `raw/`: `../../raw/<tema>/<archivo>.md`.
