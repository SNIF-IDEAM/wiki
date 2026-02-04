# HU-IDEAM-SNIF-REST-022

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-022\
> **Nombre Historia de Usuario:** Autenticación de usuarios vía Keycloak

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario del SNIF.\
> **Quiero:** autenticarme mediante Keycloak.\
> **Para:** acceder de forma segura a los módulos del SNIF según mi rol y permisos.

## CRITERIOS DE ACEPTACIÓN

1. **Validaciones funcionales**  
   1.1 Autenticación mediante OAuth2 / OpenID Connect.  
   1.2 Validación de token activo y vigente.  
   1.3 Asociación del usuario autenticado a:  
   - Rol.  
   - Entidad.  
   - Perfil funcional.

2. **Reglas de negocio**  
   2.1 El sistema no gestiona contraseñas localmente.  
   2.2 Si el token expira:  
   - Se redirige automáticamente al flujo de autenticación.  
   2.3 Si el usuario no tiene rol asignado:  
   - Acceso restringido (solo módulos públicos o bloqueo controlado con mensaje informativo).

3. **Auditoría**  
   3.1 Evento: Inicio de sesión.  
   3.2 Datos registrados:  
   - Usuario.  
   - Rol.  
   - Entidad.  
   - Fecha y hora.  
   - Resultado (exitoso / fallido).

## ROLES

- **Todos los usuarios autenticados:** Acceden según su rol y permisos asignados en Keycloak.

## RESTRICCIONES Y LÍMITES

- El sistema no gestiona contraseñas localmente.
- La autenticación es exclusivamente mediante Keycloak.
- Usuarios sin rol asignado tienen acceso restringido.
- Todos los intentos de inicio de sesión se auditan.
