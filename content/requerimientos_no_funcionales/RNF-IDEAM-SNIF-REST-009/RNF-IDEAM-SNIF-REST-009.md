# RNF-IDEAM-SNIF-REST-009  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Consistencia transaccional

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario del sistema (registrador o validador).  
> **Quiero:** que las operaciones que involucren múltiples tablas se ejecuten dentro de transacciones atómicas.  
> **Para:** evitar estados parciales, garantizar consistencia de la información y asegurar que las operaciones complejas se registren completa y correctamente.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Alcance de operaciones transaccionales

1.1 Las operaciones que creen/actualicen información en más de una tabla (por ejemplo: creación de acción + indicadores + seguimientos) deben ejecutarse como una **unidad transaccional**.  
1.2 El sistema debe definir explícitamente cuáles operaciones son transaccionales y mantener esa definición en documentación técnica.

### 2. Atomicidad (commit/rollback)

2.1 Si todos los pasos de la operación se ejecutan correctamente, el sistema debe confirmar los cambios con **commit**.  
2.2 Si falla cualquier paso de la operación, el sistema debe ejecutar **rollback** y no debe quedar ningún registro parcial en ninguna de las tablas involucradas.  
2.3 La operación debe retornar un error controlado (400/409/500 según corresponda) con mensaje claro al usuario y detalle técnico solo en logs internos.

### 3. Consistencia ante fallos e interrupciones

3.1 Ante caídas del servicio o interrupciones durante la operación, el sistema no debe dejar datos en estado inconsistente (la BD debe quedar en estado previo a la transacción).  
3.2 Las transacciones deben manejar tiempos de espera (timeout) y bloqueo de forma controlada para evitar degradación prolongada.

### 4. Evidencia de verificación

4.1 Deben existir pruebas de integración que simulen fallos en pasos intermedios y demuestren que:  
- No se crean registros parciales.  
- La operación completa falla de forma controlada.  

4.2 Debe existir evidencia en logs/trace de que se ejecutó rollback y se capturó el error con identificador (`trace_id` o equivalente).

### 5. Auditoría y trazabilidad

5.1 Las operaciones transaccionales exitosas deben registrar auditoría completa (usuario, fecha/hora, entidades creadas/actualizadas).  
5.2 Las fallas transaccionales deben quedar registradas con causa y `trace_id`, sin exponer información sensible.

---

### Resultado esperado

Operaciones multi-tabla ejecutadas de forma **atómica**, evitando registros parciales y garantizando consistencia, con evidencia de pruebas de rollback y trazabilidad de eventos.

---
