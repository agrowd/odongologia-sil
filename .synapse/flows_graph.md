# 🗺️ Flujos Lógicos del Sistema (`flows_graph.md`)

Este gráfico describe la experiencia del usuario y cómo interactúan las distintas secciones y modales en Odontología Sil.

## 📈 Grafo de Navegación del Usuario

```mermaid
graph TD
    A[Usuario entra a index.html] --> B[Se activa Modal de Bienvenida]
    B -->|Click en Cerrar| C[Explorar Página Principal]
    B -->|Click en Turnos WhatsApp| D[Contacto de Turnos Whatsapp Sede Central]
    
    C --> E[Header Fijo / Sticky Navbar]
    E -->|Click en Logo/Inicio| C
    E -->|Click en Sobre Sil| F[Sección Sobre Nosotros]
    E -->|Click en Especialidades| G[Sección Tratamientos]
    E -->|Click en Clínicas| H[Sección Ubicaciones]
    E -->|Click en Consultas| I[WhatsApp General]
    
    C --> J[Hero Section]
    J -->|Click en Contacto Directo| I
    
    C --> K[Sección Especialidades]
    K -->|Tarjetas Interactivas| L[Detalle de Implantes, Ortodoncia, Estética, etc.]
    
    C --> M[Sección Ubicaciones / Clínicas]
    M -->|Botones de Sede La Plata| N[WhatsApp/Llamar La Plata]
    M -->|Botones de Sede City Bell| O[WhatsApp/Llamar City Bell]
    M -->|Botones de Sede Gonnet| P[WhatsApp/Llamar Gonnet]
    
    C --> Q[Pie de Página / Footer]
    Q -->|Redes Sociales| R[Instagram / Facebook]
```

## 🛠️ Interacciones Especiales
1. **Modal de Bienvenida (`popup`)**:
   - Se muestra automáticamente a los 500ms de cargar la página si el usuario no tiene una cookie o propiedad en `localStorage` (`sil-welcome-shown`).
   - Muestra un texto resumido de los servicios integrales de Odontología Sil y un botón llamativo para reservar turnos en WhatsApp.
2. **Scroll Suave e Interactivo**:
   - Menú de navegación fijo en dispositivos desktop y colapsable (menú hamburguesa) en móvil.
   - Enlace activo resaltado visualmente con una transición suave al hacer scroll sobre la sección correspondiente.
