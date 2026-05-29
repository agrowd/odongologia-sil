# 🌐 Gestor de Entornos (`env_manager.md`)

## 📌 Configuración de Entornos

### [L] Desarrollo Local (Local Dev)
- **Servidor local**: Servidor estático local (p. ej., Live Server, Python http.server, o npm run dev en puerto local).
- **Puerto sugerido**: `5500`
- **URL Base**: `http://localhost:5500`
- **Comando de ejecución**: `npx -y browser-sync start --server "web" --files "web/*"` o similar.

### [P] Producción (Production VPS)
- **URL del Sitio**: `https://odontologiasil.com.ar` (o la URL definitiva asignada).
- **Servidor web**: Nginx / Apache
- **Protocolo**: HTTPS (SSL obligatorio)

---

## 📞 Variables de Configuración de Negocio (Odontología Sil)

Estas variables deben ser fáciles de cambiar y se reflejan en el código final del sitio.

| Variable | Valor | Uso en el Sitio |
|:---|:---|:---|
| `CLINIC_NAME` | **Odontología Sil** | Título, Logo, Textos de Bienvenida |
| `WHATSAPP_LINK` | `https://wa.me/5492215644414` | Botones de Consultas y Flotantes |
| `WHATSAPP_NUMBER` | `+54 9 221 564 - 4414` | Textos de contacto rápidos |
| `EMAIL_CONTACT` | `info@odontologiasil.com.ar` | Formularios y Footer |
| `SEDE_LA_PLATA_TEL` | `(0221) 564-4414` | Sección Clínicas y Contacto |
| `SEDE_LA_PLATA_DIR` | `Av. 72 nº 1214 (e/ 19 y 20)` | Dirección La Plata |
| `SEDE_CITY_BELL_TEL` | `0221 621-7472` | Sección Clínicas y Contacto |
| `SEDE_CITY_BELL_DIR` | `Cantilo 473 nº 1215 (e/ 17 y 19)` | Dirección City Bell |
| `SEDE_GONNET_TEL` | `0221 626-8888` | Sección Clínicas y Contacto |
| `SEDE_GONNET_DIR` | `Cno. Gral. Belgrano y 492` | Dirección Gonnet |
