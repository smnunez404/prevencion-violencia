---
title: IA responsable
type: concept
updated: 2026-09-12
status: draft
sources: Kenji Kawaida, módulo 4 HACKBIZ; convocatoria §12 y Anexo VI
raw: [Transcripción módulo IA](../../raw/notes/gemini-code-1789271901284.md); [Convocatoria oficial HACKBIZ 2026](../../raw/notes/Convocatoria_oficial_HACKBIZ_2026.docx.md)
---

# IA responsable

Cómo Kenji plantea usar modelos en el hackatón. Encaja con [reglas](reglas-ia-etica.md): se puede usar IA si se **explica**.

## Tesis técnica

Un modelo es una función que aprendió de ejemplos. El lenguaje humano miente al conteo de palabras («estoy normal, no estoy preocupado, pero sí estoy triste»). Hace falta **contexto** (transformers / atención), no un diccionario.

No todo es un LLM de API (ChatGPT, Claude, Gemini). Un modelo **chico y de dominio** puede ser más honesto, más barato de correr y explicable. Él: RoBERTa de salud mental en español (~0,4 mil millones de parámetros en un momento; en otro dijo «4.000 millones» — ASR flojo). Tope **512 tokens**. Entrenado/adaptado, dijo, con ~1,9 millones de publicaciones del área en español.

Fine-tune no tiene que tocar todo el modelo: congelar + cabeza clasificadora + últimas capas, o LoRA / QLoRA / PEFT. Entrenar en **Colab** o GPU (≥ serie 3000, dijo); inferir local. Móvil: API, o LiteRT / MediaPipe / TFLite.

Datos: sintéticos, balanceados, con negación, intensidad y mezclas. Multietiqueta (sigmoide), no «una sola clase gana». Métricas: precisión, recall, F1. Umbral 50% = **demo**, no verdad clínica.

## Cinco responsabilidades (Kenji)

1. Patrones lingüísticos. **No diagnostica, no prescribe, no decide** acceso a oportunidades.
2. Privacidad: sin nombres, historias clínicas ni datos reales sin consentimiento. Retención limitada.
3. Sesgo: el español cambia por región (nombró tres en Bolivia), edad y grupo.
4. Supervisión humana. Etiquetar a una persona sin contexto es riesgo **legal** para quien programa.
5. Urgencia: palabras explícitas (suicidarme, hacerme daño, no quiero vivir) → cortocircuito a ayuda, **fuera** del modelo.

## Ideas de uso que soltó (no elegidas)

Encuestas anónimas agregadas; ruteo a materiales de apoyo; en empleabilidad, clasificar lo que alguien escribe (estrés de entrevista, poca confianza, orientación, transporte, skills digitales); simulador de entrevista; ayudar a un CV. Siempre como **mano**, no como psicólogo.

## See also

- [Fuente](../sources/modulo-ia-kenji.md)
- [Salud mental](salud-mental.md)
- [No hacer](no-hacer.md)
