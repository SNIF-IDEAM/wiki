# RNF-IDEAM-SNIF-REST-010  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Prevención de duplicidades

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / responsable de datos.  
> **Quiero:** que el sistema implemente validaciones técnicas para evitar registros duplicados definidos por reglas de negocio (unicidad territorial, jerárquica y temporal).  
> **Para:** asegurar calidad de datos, evitar inconsistencias en reportes y garantizar la unicidad de registros clave del PIGCCT.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Reglas de unicidad formalizadas

1.1 El sistema debe definir y documentar las reglas de unicidad aplicables por entidad (territorial, jerárquica y temporal), por ejemplo:  
- Unicidad territorial: combinación territorio + entidad (según catálogo oficial).  
- Unicidad temporal: combinación entidad + vigencia/año/periodo.  
- Unicidad jerárquica: combinación PIGCCT + eje + medida (según modelo).  

1.2 Las reglas deben ser consistentes entre la lógica de aplicación y la base de datos.

### 2. Validación preventiva en la aplicación

2.1 Antes de crear un registro, el backend debe validar que no exista un registro activo con la misma combinación única definida.  
2.2 Si se detecta duplicidad, el sistema debe bloquear el guardado y responder con **409 (Conflict)** o equivalente, con un mensaje claro indicando la regla de unicidad incumplida (sin exponer detalles sensibles).  
2.3 La validación debe operar también bajo concurrencia (dos solicitudes simultáneas no deben crear duplicados).

### 3. Restricción técnica en base de datos

3.1 El sistema debe implementar restricciones técnicas para reforzar unicidad (por ejemplo, **unique constraints** o índices únicos) cuando aplique.  
3.2 Si la BD detecta duplicidad (constraint violation), el sistema debe capturar el error y retornar un mensaje controlado y entendible al usuario.

### 4. Escenarios de actualización e historial

4.1 Si una entidad cambia de estado (activo/inactivo), la regla de unicidad debe respetar la política definida (por ejemplo, permitir un nuevo registro solo si el anterior está inactivo, si esa es la regla).  
4.2 Los registros históricos no deben “romper” la unicidad operativa; la regla debe aclarar si aplica sobre registros activos o sobre todos.

### 5. Evidencia de verificación

5.1 Deben existir casos de prueba para cada regla de unicidad definida que demuestren:  
- Bloqueo por duplicidad en creación.  
- Bloqueo por duplicidad bajo concurrencia.  
- Manejo controlado del error cuando lo detecta la BD.  

5.2 Debe existir evidencia de constraints/índices únicos en scripts/migraciones cuando aplique.

---

### Resultado esperado

Registros clave del PIGCCT sin duplicidades, con reglas de unicidad claras, validación preventiva en aplicación, refuerzo en base de datos y comportamiento consistente incluso bajo concurrencia.

---
