# RNF-IDEAM-SNIF-REST-006  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Manejo de concurrencia

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario del sistema (registrador, validador o consultor).  
> **Quiero:** que el sistema soporte múltiples usuarios concurrentes sin pérdida de información ni conflictos de integridad.  
> **Para:** garantizar que el trabajo simultáneo en registro, validación y consulta sea confiable, consistente y auditable.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Concurrencia multi-rol soportada

1.1 El sistema debe permitir la operación simultánea de registradores, validadores y consultores sobre los mismos módulos, sin caídas ni corrupción de datos.  
1.2 En escenarios de concurrencia, el sistema debe mantener consistencia de información presentada en listados y detalles (sin datos “fantasma” o incompletos por fallos transaccionales).

### 2. Integridad y consistencia en escrituras

2.1 Las operaciones de creación/actualización que afecten múltiples tablas o entidades relacionadas deben ejecutarse en transacciones atómicas (commit/rollback).  
2.2 El sistema debe prevenir registros duplicados o inconsistentes causados por solicitudes simultáneas (constraints y/o validaciones).  
2.3 Si dos usuarios intentan modificar simultáneamente el mismo registro, el sistema debe aplicar una estrategia definida (por ejemplo, **bloqueo optimista con versión** o **bloqueo pesimista**), garantizando:
- No sobrescritura silenciosa de cambios.  
- Mensaje claro al usuario cuando exista conflicto.

### 3. Lecturas concurrentes y rendimiento estable

3.1 El sistema debe soportar múltiples consultas concurrentes sin degradación crítica de la integridad (las lecturas no deben causar errores en escrituras).  
3.2 El sistema debe evitar bloqueos innecesarios que impidan el trabajo (por ejemplo, bloqueos prolongados por consultas mal diseñadas).

### 4. Evidencia de prueba de concurrencia

4.1 Debe existir evidencia de pruebas donde al menos:
- Un grupo de usuarios registra información.  
- Otro grupo valida/cambia estados.  
- Otro grupo consulta/lista/filtra.  

Todo en simultáneo, sin pérdida de información.

4.2 Los resultados deben demostrar que:
- No se pierden registros.  
- No se crean duplicidades por condiciones de carrera.  
- Se registran correctamente los eventos y auditoría.

### 5. Auditoría y trazabilidad en escenarios concurrentes
5.1 Cada operación concurrente debe registrar usuario, fecha/hora y acción realizada.  
5.2 Los conflictos de concurrencia (cuando ocurran) deben quedar registrados para diagnóstico (sin exponer datos sensibles).

---

### Resultado esperado

El sistema soporta **múltiples usuarios concurrentes** en registro/validación/consulta, preservando **integridad** y **consistencia**, con estrategia de conflicto definida y evidencia de pruebas.

---
