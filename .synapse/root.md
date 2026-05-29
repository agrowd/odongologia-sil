# 🧠 Ariadne Engine: Root (Mapa Central del Proyecto)

## 📌 Información General
- **Proyecto**: Odontología Sil (Rediseño y Adaptación)
- **Cliente**: Odontología Sil
- **Origen de Inspiración / Estructura**: ordinas.com.ar (WordPress/Elementor estático adaptado)
- **Tecnologías**: HTML5, Vanilla CSS3 (Custom Properties), JavaScript ES6.
- **Enfoque de Diseño**: Estética premium, paleta femenina (pinks, soft rose, white, gold, warm neutrals), responsive, moderno, sin dependencias innecesarias de WordPress/Elementor.

## 📂 Estructura de Directorios y Archivos

```text
odontologia-sill/
├── .synapse/                    # Ariadne Engine Persistent Memory
│   ├── root.md                  # Mapa central del proyecto
│   ├── decisions.md             # Decisiones técnicas y su justificación
│   ├── env_manager.md           # Gestión de configuraciones e info de contacto
│   ├── flows_graph.md           # Flujos lógicos del sistema (navegación, modales)
│   ├── testing_qa.md            # Issues tracker y casos de prueba
│   ├── workcycle.md             # Log de la sesión de trabajo actual
│   ├── errores.md               # Historial de errores y soluciones
│   ├── changelog.md             # Registro de cambios por versión
│   ├── logs.md                  # Control de debugging console.logs
│   └── chat.md                  # Historial de chat guardado
└── web/                         # Archivos públicos de la web
    ├── index.html               # Página de inicio principal
    ├── styles.css               # Estilos vanilla CSS premium adaptados (femenino)
    ├── main.js                  # Lógica del sitio (modales, scroll, animaciones)
    ├── ordinas.com.ar_.png      # Captura de pantalla del sitio original
    └── source.txt               # Código fuente original de referencia
```

## 🏛️ Arquitectura del Sistema
El sitio está desarrollado como una SPA estática optimizada para máxima velocidad de carga, SEO y estética premium.
1. **HTML5 Semántico (`index.html`)**: Contiene la estructura completa de secciones incluyendo cabecera, hero, especialidades, modales, información de sedes y pie de página.
2. **Vanilla CSS (`styles.css`)**: Estilos organizados mediante variables CSS customizadas para una paleta de color femenina, fuentes modernas integradas y micro-animaciones en botones y tarjetas.
3. **Vanilla JS (`main.js`)**: Lógica responsiva para menús de navegación, comportamiento del modal interactivo de bienvenida y botones de contacto de WhatsApp.
