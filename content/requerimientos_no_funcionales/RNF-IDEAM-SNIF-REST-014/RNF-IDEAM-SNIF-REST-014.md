# RNF-IDEAM-SNIF-REST-014  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Arquitectura desacoplada

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** equipo de arquitectura / mantenimiento TI.  
> **Quiero:** que el sistema implemente una arquitectura desacoplada frontend–backend mediante API REST.  
> **Para:** facilitar mantenimiento y evolución, reduciendo acoplamiento entre capas y permitiendo cambios controlados sin afectar la operación.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Separación de responsabilidades (frontend vs backend)

1.1 El **frontend** no debe acceder directamente a la base de datos ni depender de consultas directas; toda interacción debe realizarse mediante el **backend**.  
1.2 El **backend** debe exponer una API REST para las funcionalidades requeridas del sistema (consultas, listados, filtros y operaciones operativas según permisos).  
1.3 Los servicios y reglas de negocio deben residir en el backend; el frontend debe actuar como cliente consumidor.

### 2. Contrato de API y consistencia

2.1 La API debe definir contratos consistentes de request/response (estructura JSON), incluyendo códigos HTTP correctos.  
2.2 La API debe manejar versionamiento o estrategia de compatibilidad (por ejemplo, `/api/v1/` o política equivalente) para evitar rupturas ante evoluciones.  
2.3 Debe existir un estándar de manejo de errores (estructura de error con `code`, `message`, `trace_id`, `timestamp` o equivalente).

### 3. Seguridad y control en capa de backend

3.1 La autenticación y autorización deben aplicarse en el backend (no solo en el frontend), validando token y permisos en cada solicitud.  
3.2 Los endpoints deben estar protegidos contra acceso no autorizado y deben retornar **401/403** según corresponda.

### 4. Documentación técnica y consumo

4.1 Debe existir documentación de endpoints (mínimo: rutas, método, parámetros, ejemplos de respuesta), accesible para el equipo.  
4.2 Los endpoints principales deben poder probarse mediante una colección (Postman/Insomnia) o equivalente como evidencia de consumo desacoplado.

### 5. Evidencia de verificación

5.1 Debe existir evidencia de que el sistema puede ejecutarse con frontend y backend como componentes independientes (por ejemplo, despliegue separado por ambiente).  
5.2 Deben existir pruebas que demuestren que cambios en UI no requieren cambios en BD directa y que los cambios se concentran en capa de API según corresponda.

---

### Resultado esperado

Arquitectura **desacoplada** frontend–backend basada en **API REST**, con contratos consistentes, seguridad aplicada en backend y documentación verificable para mantenimiento y evolución.

---

