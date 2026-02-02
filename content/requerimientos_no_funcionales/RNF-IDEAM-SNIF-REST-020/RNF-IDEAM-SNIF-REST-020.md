# RNF-IDEAM-SNIF-REST-020  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Disponibilidad operativa

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** responsable institucional / administrador del sistema.  
> **Quiero:** que el sistema esté disponible al menos el 99% del tiempo en horario operativo institucional.  
> **Para:** garantizar continuidad del servicio, evitar interrupciones en procesos de registro, validación y consulta, y asegurar cumplimiento de compromisos institucionales.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Definición de disponibilidad y horario operativo

1.1 El sistema debe definir explícitamente el **horario operativo institucional** aplicable (días y horas) para el cálculo de disponibilidad.  
1.2 La disponibilidad debe medirse como porcentaje de tiempo en que el servicio está accesible para usuarios autorizados (frontend y endpoints críticos del backend).  
1.3 Deben excluirse del cálculo las ventanas de mantenimiento programadas y comunicadas, si así lo define la política institucional.

### 2. Umbral mínimo de disponibilidad

2.1 El sistema debe alcanzar una disponibilidad mínima de **99%** dentro del horario operativo institucional, calculada por periodo (mensual o el definido).  
2.2 El incumplimiento del umbral debe registrarse como incidente, con fecha/hora de inicio-fin y causa.

### 3. Monitoreo y registro de disponibilidad

3.1 Debe existir monitoreo activo (health checks) sobre el servicio (por ejemplo, endpoint de salud del backend y disponibilidad de frontend).  
3.2 El sistema debe registrar métricas o logs de disponibilidad/caídas y permitir consolidar reportes por periodo.  
3.3 El monitoreo debe diferenciar indisponibilidad total vs degradación (si aplica) y permitir evidenciar eventos.

### 4. Evidencia de verificación

4.1 Debe existir evidencia de la definición de horario operativo y método de cálculo de disponibilidad.  
4.2 Debe existir evidencia de monitoreo (dashboard, reporte o logs) que permita demostrar el porcentaje de disponibilidad para un periodo de referencia.  
4.3 Debe existir un procedimiento documentado para registrar incidentes y ventanas de mantenimiento.

---

### Resultado esperado

Sistema con disponibilidad mínima de **99%** en horario operativo institucional, medido con monitoreo verificable, registro de incidentes y reporte por periodo.

---

