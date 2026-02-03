# RNF-IDEAM-SNIF-REST-003  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Protección contra accesos no autorizados

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / responsable de seguridad.  
> **Quiero:** que el sistema implemente mecanismos de bloqueo por intentos fallidos, expiración de sesión y validación de token en cada solicitud al backend.  
> **Para:** mitigar intentos de fuerza bruta, reducir secuestro de sesiones y reforzar la seguridad del acceso.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Bloqueo por intentos fallidos

1.1 El sistema debe contabilizar intentos fallidos de autenticación por usuario (y/o por IP según política).  
1.2 Al superar el umbral configurado (por ejemplo **5 intentos fallidos**), el sistema debe aplicar un **bloqueo temporal** (por ejemplo **15 minutos**) y rechazar intentos adicionales.  
1.3 El umbral de intentos y el tiempo de bloqueo deben ser **parametrizables**.  
1.4 La respuesta ante bloqueo debe ser genérica (sin exponer si el usuario existe) y retornar código **429** o **403** según estándar definido.

### 2. Expiración y control de sesión

2.1 Las sesiones deben expirar automáticamente conforme a una política definida (por ejemplo, por `exp` del JWT o timeout de inactividad).  
2.2 Al expirar la sesión, el sistema debe exigir reautenticación y retornar **401** en endpoints protegidos.  
2.3 El sistema debe invalidar el acceso ante logout (según estrategia definida: blacklist/rotación/revocación).

### 3. Validación del token por solicitud

3.1 Todo endpoint protegido debe validar la firma, expiración y permisos del token en **cada solicitud**.  
3.2 Si el token es inválido, alterado o expirado, el sistema debe retornar **401** con un mensaje estándar.  
3.3 El sistema no debe permitir acceso a recursos protegidos si falta el header `Authorization`.

### 4. Auditoría y alertas (trazabilidad)

4.1 El sistema debe registrar: intentos fallidos, bloqueos aplicados, intentos durante bloqueo y expiraciones (cuando aplique).  
4.2 Los registros deben incluir usuario (si se identifica), IP (si aplica), fecha/hora y resultado, sin almacenar contraseñas ni tokens completos.

### 5. Usabilidad y mensajes

5.1 El sistema debe informar al usuario de manera clara cuando una sesión haya expirado, indicando que debe iniciar sesión nuevamente.  
5.2 El sistema debe evitar mensajes que faciliten enumeración de usuarios (ej. “usuario no existe”).

---

### Resultado esperado

Accesos no autorizados mitigados mediante bloqueo por intentos fallidos, expiración controlada de sesión y validación estricta del token en cada solicitud, con auditoría verificable.

---

