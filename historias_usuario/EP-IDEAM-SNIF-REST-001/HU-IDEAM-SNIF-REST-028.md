# HU-IDEAM-SNIF-REST-028

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-028\
> **Nombre Historia de Usuario:** Gestión de sesión y cierre seguro

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario.\
> **Quiero:** cerrar sesión de forma segura.\
> **Para:** finalizar correctamente mi acceso al sistema.

## CRITERIOS DE ACEPTACIÓN

1. **Invalidación de token**  
   1.1 El sistema debe invalidar el token local al cerrar sesión.  
   1.2 El token no puede ser reutilizado después del cierre de sesión.

2. **Limpieza del contexto**  
   2.1 Se limpia completamente el contexto del usuario:  
   - Rol activo.  
   - Permisos cargados.  
   - Entidad asociada.  
   - Preferencias de sesión.

3. **Redirección segura**  
   3.1 Se redirige a la pantalla inicial del SNIF.  
   3.2 No se mantiene información sensible en el navegador.

4. **Auditoría**  
   4.1 Evento auditado: Cierre de sesión.  
   4.2 El registro incluye:  
   - Identificación del usuario.  
   - Fecha y hora del cierre.  
   - Tipo de cierre (manual/automático).

5. **Acceso desde múltiples ubicaciones**  
   5.1 El botón o enlace de cierre de sesión debe estar disponible desde cualquier vista.  
   5.2 Confirmación opcional antes de cerrar sesión (si hay cambios sin guardar).

## ROLES

- **Todos los usuarios autenticados:** Pueden cerrar sesión de forma segura.

- **Sistema:** Responsable de ejecutar el proceso de cierre seguro.

## RESTRICCIONES Y LÍMITES

- El cierre de sesión es irreversible y requiere nueva autenticación.
- Los datos no guardados pueden perderse al cerrar sesión.
- Para usuarios invitados, el cierre de sesión también elimina cualquier configuración temporal.
- El sistema debe manejar cierres de sesión por timeout automático.

