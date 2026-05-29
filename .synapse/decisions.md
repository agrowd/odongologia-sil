# 🔒 Decisiones Técnicas (`decisions.md`)

| ID | Decisión Técnica | La Razón (The Why) | Estado |
|:---|:---|:---|:---|
| D-01 | **Arquitectura de Réplica Fiel (WP/Elementor estático)** | En lugar de escribir el HTML desde cero, el cliente solicitó copiar el diseño exacto junto con el código fuente. Se conservó el HTML estructurado original de `source.txt` con todas sus clases, grids de Elementor, scripts de bxslider y animaciones. | 🔒 LOCKED |
| D-02 | **Paleta de Colores Femenina (Soft Rose & Gold)** | El cliente solicitó un tono más femenino para "Odontología Sil". Se usará una combinación de Rosa Viejo/Rosa Suave (#FFB7C5, #FFF0F2), Blanco Premium, tonos Neutros Cálidos y acentos en Oro/Rosa Dorado para mantener un tono sofisticado de salud y bienestar. | 🔒 LOCKED |
| D-03 | **Eliminar Sección de Inicio de Sesión** | El cliente explícitamente solicitó quitarlo ya que no es necesario para su flujo actual, ocultando el contenedor de la cabecera `elementor-element-754cbc9`. | 🔒 LOCKED |
| D-04 | **Mantener Información de Sedes y Especialidades** | La información de "La Plata", "City Bell", "Gonnet" y la estructura de especialidades es el activo más importante del cliente original. Se conservará adaptándola al nuevo nombre "Odontología Sil". | 🔒 LOCKED |
| D-05 | **Optimización de Animaciones con IntersectionObserver** | En lugar de librerías externas pesadas (como Animate.css de WordPress), usaremos animaciones CSS nativas y las activaremos mediante JavaScript nativo al hacer scroll. | 🟢 ACTIVE |
| D-06 | **Inyección de CSS Overrides en el Head** | Para cambiar la paleta cromática completa (azul original a rosa y oro) de manera robusta a través de todos los stylesheets externos de WordPress que el HTML carga, inyectamos reglas con `!important` y modificamos las variables globales `--wp--preset--color--cm-color-x` y `--tpg-primary-color` en el encabezado. | 🔒 LOCKED |
