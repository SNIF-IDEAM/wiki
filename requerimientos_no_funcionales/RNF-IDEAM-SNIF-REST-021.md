# RNF-IDEAM-SNIF-REST-021  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Manejo de errores controlado

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario institucional.  
> **Quiero:** que el sistema maneje errores de forma controlada, mostrando mensajes comprensibles y evitando exposición de información sensible.  
> **Para:** poder corregir mis acciones cuando haya errores, mantener confianza en el sistema y proteger la seguridad institucional.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Respuesta estandarizada de errores (backend)

1.1 Ante errores, el backend debe retornar una estructura estándar de error (JSON) con, como mínimo: `code`, `message`, `trace_id` y `timestamp` (o equivalentes definidos).  
1.2 Los códigos HTTP deben ser consistentes con el tipo de error:
- **400**: validación/entrada inválida.  
- **401**: no autenticado / token inválido o expirado.  
- **403**: sin permisos.  
- **404**: recurso no encontrado.  
- **409**: conflicto (por ejemplo, duplicidad).  
- **500**: error interno del servidor.  

### 2. Mensajes comprensibles y accionables (frontend)

2.1 El sistema debe mostrar mensajes claros al usuario final, indicando qué ocurrió y, cuando aplique, cómo corregirlo.  
2.2 Los mensajes deben evitar tecnicismos (por ejemplo, no mostrar nombres de tablas, consultas SQL, stacktraces o rutas internas).  
2.3 El sistema debe presentar mensajes consistentes en formato y severidad (Error/Advertencia/Éxito).

### 3. No exposición de información sensible

3.1 Ninguna respuesta de error al cliente debe incluir: stacktrace, detalles de infraestructura, secretos, tokens completos, rutas internas o consultas SQL.  
3.2 Los detalles técnicos del error deben quedar únicamente en logs internos, asociados al `trace_id`.  
3.3 Los logs internos deben enmascarar datos sensibles (por ejemplo, tokens y credenciales).

### 4. Registro y trazabilidad del error

4.1 Todo error relevante debe registrarse con `trace_id`, fecha/hora, endpoint/acción y resultado (sin exponer datos sensibles).  
4.2 El sistema debe permitir correlacionar el mensaje mostrado al usuario con el error en logs mediante el `trace_id` (cuando aplique).

### 5. Evidencia de verificación

5.1 Deben existir casos de prueba que generen errores típicos (validación, 401, 403, 404, 409, 500) y evidencien:
- Estructura estándar de error.  
- Mensajes comprensibles en UI.  
- Ausencia de información sensible en respuesta.  

5.2 Debe existir evidencia en logs de que los detalles técnicos se registran internamente y se relacionan con `trace_id`.

---

### Resultado esperado

Errores manejados de forma controlada y estandarizada, con mensajes claros al usuario, sin exposición de información sensible y con trazabilidad técnica mediante `trace_id`.

---

