# RNF-IDEAM-SNIF-REST-002  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Autorización basada en roles

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema.  
> **Quiero:** que el sistema aplique control de acceso estricto basado en roles y permisos.  
> **Para:** garantizar segregación de funciones entre registro, validación, administración y consulta, evitando accesos indebidos y errores operativos.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Modelo de roles y permisos

1.1 El sistema debe contar con un modelo de **roles** (mínimo: registro, validación, administración y consulta) asociado a un conjunto de permisos.  
1.2 Los permisos deben aplicarse tanto en **backend** (API) como en **frontend** (UI), sin depender únicamente de la interfaz.  
1.3 Los roles/permisos deben ser administrables o parametrizables según política institucional (según diseño del sistema).

### 2. Control de acceso a funcionalidades

2.1 Un usuario solo debe poder visualizar y ejecutar acciones correspondientes a su rol.  
2.2 Si un usuario intenta acceder a una funcionalidad sin permiso, el sistema debe:
- Bloquear la acción en backend y retornar **403 (Forbidden)**.  
- Mostrar un mensaje claro indicando falta de permisos.  

2.3 Endpoints protegidos deben validar permisos en cada solicitud (no solo al inicio de sesión).

### 3. Segregación de funciones

3.1 El sistema debe impedir que un usuario sin rol de validación pueda validar o rechazar información.  
3.2 El sistema debe impedir que un usuario sin rol de administración pueda:
- Gestionar roles/permisos.  
- Cambiar configuraciones sensibles del sistema.  

3.3 Las acciones críticas deben estar asociadas a permisos explícitos, no implícitos.

### 4. Auditoría y trazabilidad
4.1 Los accesos denegados deben registrarse en auditoría (usuario, fecha/hora, recurso, acción).  
4.2 Las acciones críticas realizadas (validación, cambios de estado, configuraciones) deben registrar usuario, fecha/hora y entidad afectada.

### 5. Usabilidad y experiencia de usuario
5.1 La interfaz debe ocultar o deshabilitar acciones no permitidas, sin reemplazar la validación del backend.  
5.2 El sistema debe mostrar mensajes consistentes y no técnicos cuando una acción sea bloqueada por permisos.

---

### Resultado esperado

Control de acceso estricto y verificable por **roles y permisos**, con segregación efectiva de funciones, bloqueo en backend y trazabilidad de accesos y acciones.

---
