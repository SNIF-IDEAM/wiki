# RNF-IDEAM-SNIF-REST-001  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Seguridad de autenticación

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / responsable de seguridad.  
> **Quiero:** que el sistema garantice autenticación segura mediante tokens JWT, evitando el almacenamiento o transmisión de contraseñas en texto plano.  
> **Para:** proteger el acceso al sistema, reducir el riesgo de compromiso de credenciales y asegurar sesiones confiables y auditables.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Emisión y validación del token JWT

1.1 Al autenticarse con credenciales válidas, el sistema debe emitir un **access token JWT** firmado.  
1.2 El token debe incluir, como mínimo, claims de identificación y control de sesión: `sub` (identificador de usuario), `role`/`roles`, `iat` y `exp`.  
1.3 El backend debe validar el token **en cada solicitud** a endpoints protegidos y rechazar tokens inválidos o alterados con respuesta **401**.  
1.4 El sistema debe impedir el uso de tokens expirados y retornar **401** con un mensaje estándar no sensible.

### 2. Protección de credenciales (no texto plano)
2.1 El sistema **no debe almacenar** contraseñas en texto plano en ninguna base de datos, archivo de configuración o log.  
2.2 El sistema **no debe transmitir** contraseñas en texto plano (por ejemplo, en URL/querystring o logs).  
2.3 Las credenciales deben enviarse únicamente mediante el canal de autenticación definido y siempre por **HTTPS/TLS** en entornos no locales.

### 3. Transporte y manejo seguro del token
3.1 El token debe enviarse únicamente mediante el encabezado `Authorization: Bearer <token>` (no por querystring).  
3.2 El sistema debe evitar registrar el token completo en logs; si se registra, debe estar **enmascarado**.  
3.3 En caso de cierre de sesión (logout) o revocación definida, el sistema debe invalidar el acceso del token conforme a la política de sesión definida.

### 4. Mensajes y retroalimentación
4.1 En caso de autenticación fallida, el sistema debe mostrar un mensaje genérico (ej. “Credenciales inválidas”) sin indicar si el usuario o la contraseña son incorrectos.  
4.2 Ante fallos del servicio de autenticación, el sistema debe informar el error de manera clara al usuario sin exponer detalles técnicos.

### 5. Auditoría y trazabilidad
5.1 El sistema debe registrar eventos de autenticación: éxito, fallo, expiración (cuando aplique) e intentos repetidos, incluyendo usuario (si se identifica), fecha/hora y resultado.  
5.2 Los registros de auditoría no deben contener contraseñas ni tokens completos.

---

### Resultado esperado

Usuarios autenticados mediante **JWT** de forma segura, sin almacenamiento ni transmisión de contraseñas en texto plano, y con validación y trazabilidad verificable.

---
