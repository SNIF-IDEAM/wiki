# RNF-IDEAM-SNIF-REST-022  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Recuperación ante fallos

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / operaciones TI.  
> **Quiero:** que el sistema permita recuperación ante fallos sin pérdida de información validada o histórica.  
> **Para:** asegurar continuidad operativa, minimizar impacto de incidentes y preservar integridad y trazabilidad de la información institucional.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Estrategia de respaldo y restauración

1.1 Debe existir una estrategia definida de **backup y restore** para la base de datos y componentes críticos (según arquitectura).  
1.2 Los respaldos deben incluir información validada e histórica y garantizar restauración completa a un punto consistente.  
1.3 La periodicidad de respaldos y retención debe estar documentada y alineada con la política institucional.

### 2. Recuperación sin pérdida de información relevante

2.1 Ante un fallo del servicio (reinicio inesperado, caída del backend), el sistema no debe dejar la base de datos en estado inconsistente (aplicación de transacciones/rollback).  
2.2 Luego de la recuperación/reinicio, la información validada e histórica debe permanecer disponible y consistente.  
2.3 El sistema debe evitar pérdida de información ya confirmada (commit) y, si existen operaciones en curso, debe asegurar que queden canceladas de forma segura (sin registros parciales).

### 3. Procedimiento operativo de recuperación

3.1 Debe existir un procedimiento documentado paso a paso para recuperación: detección, contención, restauración y verificación.  
3.2 El procedimiento debe incluir verificación de integridad posterior a recuperación (por ejemplo, validaciones básicas, conteos, checks).  
3.3 El procedimiento debe incluir canales de comunicación/registro de incidentes (según política institucional).

### 4. Evidencia de pruebas de recuperación

4.1 Debe existir evidencia de al menos una prueba de restauración en ambiente controlado (QA o equivalente) que demuestre:
- Restauración exitosa desde backup.  
- Disponibilidad posterior del sistema.  
- Conservación de información validada e histórica.  
4.2 Debe existir evidencia de que las entidades críticas y relaciones se conservan tras la restauración (integridad referencial).

### 5. Auditoría y trazabilidad de incidentes

5.1 Los eventos de falla y recuperación (cuando se detecten) deben registrarse para análisis posterior, incluyendo fecha/hora, componente afectado y resultado.  
5.2 La auditoría no debe exponer secretos y debe registrar un identificador de incidente o `trace_id` cuando aplique.

---

### Resultado esperado

Sistema recuperable ante fallos mediante estrategia de backup/restore y procedimientos operativos, sin pérdida de información validada o histórica y con evidencia verificable de pruebas de recuperación.

---

