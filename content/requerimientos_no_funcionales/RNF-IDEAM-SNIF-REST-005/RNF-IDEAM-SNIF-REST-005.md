# RNF-IDEAM-SNIF-REST-005  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Tiempo de respuesta

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario del sistema (registrador, validador o consultor).  
> **Quiero:** que el sistema responda a las operaciones CRUD principales (listar, filtrar, consultar) en un tiempo promedio menor a 3 segundos bajo carga normal.  
> **Para:** operar el sistema de manera ágil, evitar bloqueos operativos y garantizar productividad en tareas de registro, validación y consulta.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Operaciones cubiertas y condición de “carga normal”
1.1 Se consideran operaciones principales: **listar**, **filtrar** y **consultar detalle** sobre los módulos principales del sistema.  
1.2 “Carga normal” debe contemplar concurrencia de al menos tres perfiles activos: registradores, validadores y consultores, según configuración institucional (escenario de prueba definido en QA).  
1.3 Las consultas deben ejecutarse sobre un conjunto de datos representativo (dataset mínimo definido para pruebas), evitando validación con base de datos vacía.

### 2. Umbral de desempeño verificable
2.1 En carga normal, el tiempo de respuesta **promedio** de las operaciones principales debe ser **< 3 segundos** por solicitud, medido desde que el usuario ejecuta la acción hasta que recibe respuesta del sistema.  
2.2 Para garantizar consistencia, el sistema debe cumplir adicionalmente (recomendado para aceptación):  
- **P95 ≤ 3 segundos** para listar/filtrar/consultar.  

2.3 Si una operación excede el umbral, el sistema debe permitir identificar el endpoint/módulo responsable mediante logs o métricas.

### 3. Reglas técnicas para soportar el rendimiento
3.1 Los listados deben estar **paginados** por defecto y no permitir retornos ilimitados.  
3.2 Los filtros deben ejecutarse con criterios indexables (según diseño), evitando consultas full-scan cuando sea prevenible.  
3.3 El sistema debe limitar el tamaño máximo de respuesta (por ejemplo, máximo de registros por página parametrizable).

### 4. Evidencia de validación del rendimiento
4.1 Debe existir evidencia de prueba (reporte de carga o medición) mostrando promedio y percentil P95 para los endpoints evaluados.  
4.2 El reporte debe documentar: ambiente, dataset, número de usuarios concurrentes, duración de la prueba y resultados por operación.

### 5. Mensajes y manejo de degradación (si aplica)
5.1 En caso de degradación (latencias superiores), el sistema no debe fallar silenciosamente; debe registrar el evento y responder sin exponer información sensible.  
5.2 El sistema debe evitar timeouts sin manejo, registrando el error y permitiendo reintento controlado desde el cliente (según diseño).

---

### Resultado esperado

Operaciones principales de **listar, filtrar y consultar** responden en **promedio < 3 segundos** bajo carga normal, con evidencia de pruebas y mecanismos para identificar cuellos de botella.

---

