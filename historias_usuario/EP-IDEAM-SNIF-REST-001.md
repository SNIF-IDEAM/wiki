# Épica 001: Autenticación, Autorización y Gestión de Usuarios

## 1. Descripción general

Esta épica define los mecanismos de autenticación, autorización y gestión de usuarios del módulo de restauración del Sistema Nacional de Información Forestal (SNIF).

El sistema de autenticación está basado en **Keycloak** mediante protocolos estándar OAuth2 / OpenID Connect, garantizando seguridad, trazabilidad y control de acceso centralizado. La autorización se gestiona mediante roles institucionales (Administrador IDEAM, Registrador, Consulta/Invitado) que determinan el acceso diferenciado a las aplicaciones y funcionalidades del módulo.

La gestión de usuarios incluye el registro, activación, asignación de roles, gestión de perfiles, y auditoría completa de accesos y cambios en la información de usuarios.

---

## 2. Objetivo

Garantizar un **sistema de autenticación y autorización seguro, centralizado y trazable** que permita:

- Autenticación única (SSO) mediante Keycloak.
- Control de acceso basado en roles institucionales.
- Gestión centralizada de usuarios y perfiles.
- Trazabilidad completa de accesos y operaciones.
- Cumplimiento de políticas de seguridad institucionales.
- Aplicación estricta de reglas de acceso desde la inicialización del contexto.

---

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-022:** Autenticación de usuarios vía Keycloak](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-022.md)
- [**HU-IDEAM-SNIF-REST-023:** Asignación de roles a usuarios](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-023.md)
- [**HU-IDEAM-SNIF-REST-024:** Validación de permisos por rol](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-024.md)
- [**HU-IDEAM-SNIF-REST-025:** Registro de nuevos usuarios](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-025.md)
- [**HU-IDEAM-SNIF-REST-026:** Activación y desactivación de usuarios](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-026.md)
- [**HU-IDEAM-SNIF-REST-027:** Edición de perfil de usuario](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-027.md)
- [**HU-IDEAM-SNIF-REST-028:** Consulta de información de usuario](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-028.md)
- [**HU-IDEAM-SNIF-REST-029:** Cierre de sesión (logout)](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-029.md)
- [**HU-IDEAM-SNIF-REST-030:** Renovación automática de tokens](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-030.md)
- [**HU-IDEAM-SNIF-REST-031:** Auditoría de accesos y operaciones de usuarios](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-031.md)
- [**HU-IDEAM-SNIF-REST-032:** Gestión de sesiones concurrentes](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-032.md)
- [**HU-IDEAM-SNIF-REST-033:** Regla institucional de acceso a aplicaciones del Módulo de Restauración](/historias_usuario/EP-IDEAM-SNIF-REST-001/HU-IDEAM-SNIF-REST-033.md)

---

## 4. Riesgos

- Tokens expirados que interrumpan la sesión del usuario.
- Usuarios sin rol asignado que no puedan acceder al sistema.
- Accesos no autorizados a funcionalidades restringidas.
- Falta de trazabilidad en cambios de permisos o roles.
- Sesiones concurrentes no controladas.
- Inconsistencia entre permisos en Keycloak y en la aplicación.
- Escalamiento no autorizado de privilegios.

---

## 5. Alcance funcional

### Autenticación
- Autenticación mediante Keycloak (OAuth2 / OpenID Connect)
- Validación de tokens (access token, refresh token)
- Renovación automática de tokens
- Cierre de sesión (logout)
- Gestión de sesiones concurrentes

### Autorización
- Validación de roles institucionales (Administrador IDEAM, Registrador, Consulta)
- Control de acceso a aplicaciones según perfil
- Validación de permisos por operación (CRUD)
- Aplicación de reglas institucionales de acceso
- Control de acceso multi-capa (Frontend, Backend, Base de datos)

### Gestión de usuarios
- Registro de nuevos usuarios
- Activación y desactivación de usuarios
- Asignación y modificación de roles
- Edición de perfil de usuario
- Consulta de información de usuario
- Gestión de entidad asociada al usuario

### Auditoría y trazabilidad
- Registro de todos los accesos al sistema
- Registro de operaciones por usuario
- Registro de cambios en roles y permisos
- Registro de intentos de acceso no autorizado
- Consulta de logs de auditoría (solo administradores)

---

## 6. Control por roles

| Rol | Acceso a aplicaciones | Gestión de usuarios | Consulta de auditoría |
|-----|-----------------------|---------------------|-----------------------|
| **Administrador IDEAM** | Visor, Gestión, Administración | Completo (CRUD) | Acceso completo |
| **Registrador** | Visor, Gestión | Solo consulta propia | No tiene acceso |
| **Consulta / Invitado** | Solo Visor | Solo consulta propia | No tiene acceso |

---

## 7. Reglas institucionales transversales

1. **Definición estricta por perfil:** El acceso a aplicaciones se define exclusivamente por el perfil del usuario (Administrador, Registrador, Consulta).

2. **Aplicación desde inicialización:** Las reglas de acceso se aplican desde el momento de inicialización del contexto del usuario.

3. **Control multi-capa:** Las validaciones de permisos se aplican en:
   - Frontend (renderizado de componentes)
   - Backend (validación de APIs)
   - Base de datos (permisos de lectura/escritura)

4. **Inmutabilidad durante sesión:** No se permite modificación de permisos durante una sesión activa.

5. **Trazabilidad obligatoria:** Todos los accesos y operaciones quedan registrados en auditoría.

---

## 8. Validaciones de seguridad

- Validación de token activo y vigente en cada solicitud
- Verificación de firma digital del token
- Validación de roles y permisos en cada operación
- Rechazo de solicitudes no autorizadas (403 Forbidden)
- Registro de intentos de acceso no autorizado
- Expiración automática de sesiones inactivas
- Protección contra escalamiento de privilegios

---

## 9. Diagrama de secuencia

_Pendiente de generación_

---

## 10. Wireframes / mockups

_Pendiente de generación_
