# ⚠️ Historial de Errores y Soluciones (`errores.md`)

*Esta sección se utilizará para registrar errores recurrentes, problemas en tiempo de ejecución o de compilación, su causa raíz y cómo se solucionaron para evitar volver a cometerlos.*

---

## Estructura de Registro

```markdown
## ERR-XX: Nombre del error (Fecha)
**Síntoma:** Qué vemos cuando ocurre.
**Root Cause:** Por qué ocurre realmente.
**Solución:** Cómo se arregló.
**Commit/Acción:** Detalles del parche.
**Estado:** ✅ FIXED / 🟡 PENDING
```

---

## ERR-01: Fondo de cabecera (Navbar) cambia a blanco en scroll (2026-06-08)
**Síntoma:** Al hacer scroll, la cabecera (navbar) cambiaba su fondo oscuro a un tono blanquecino/grisáceo claro, provocando que los textos en blanco y el menú hamburguesa desaparecieran (efecto texto blanco sobre fondo blanco).
**Root Cause:** En el archivo `main.js`, existía un escuchador del evento scroll que modificaba programáticamente las propiedades de estilo inline (`header.style.backgroundColor`) con valores RGB claros (`rgba(250, 247, 247, ...)`), herencia del diseño claro anterior.
**Solución:** Se modificaron los valores RGB inline dentro del evento scroll en `main.js` para usar la paleta oscura de la marca (`rgba(18, 18, 20, 0.98)` y `rgba(18, 18, 20, 0.95)`).
**Acción:** Cambios aplicados en `main.js`.
**Estado:** ✅ FIXED

