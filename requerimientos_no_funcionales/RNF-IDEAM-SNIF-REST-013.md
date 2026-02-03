# RNF-IDEAM-SNIF-REST-013  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### No pérdida de información histórica

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** auditor institucional / administrador del sistema.  
> **Quiero:** que el sistema conserve información histórica mediante estados activo/inactivo, evitando eliminaciones físicas de datos relevantes.  
> **Para:** garantizar trazabilidad histórica, permitir análisis comparativos y asegurar cumplimiento institucional sin pérdida de evidencia.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Política de no eliminación física (soft delete / estados)

1.1 El sistema debe implementar una política de conservación basada en **estados** (por ejemplo: Activo/Inactivo) para entidades relevantes del dominio.  
1.2 Las acciones de “eliminar” en interfaz (si existen) deben traducirse a **inactivación** u otra estrategia de conservación definida, no a borrado físico.  
1.3 Cualquier intento de eliminación física de entidades relevantes debe estar bloqueado a nivel de aplicación (y/o BD) según política institucional.

### 2. Conservación de relaciones e integridad histórica

2.1 Los registros inactivos deben conservar sus relaciones históricas (FK, asociaciones) sin romper integridad referencial.  
2.2 Las entidades históricas deben permanecer consultables por roles autorizados, indicando claramente su estado (activo/inactivo).  
2.3 El sistema debe impedir que registros inactivos participen en operaciones operativas nuevas cuando así lo defina la regla (por ejemplo, no permitir nuevas asociaciones a un PIGCCT inactivo).

### 3. Comportamiento en consultas y reportes

3.1 Los listados operativos deben, por defecto, priorizar registros activos (según diseño), permitiendo incluir inactivos mediante filtro.  
3.2 Los reportes y consultas históricas deben poder incluir registros inactivos para análisis comparativo, si el rol lo permite.  
3.3 El sistema debe evitar “desaparición” silenciosa de información: un registro inactivado debe seguir visible en historial y trazabilidad.

### 4. Auditoría y trazabilidad del cambio de estado

4.1 Cada cambio de estado (activo ↔ inactivo) debe generar un evento de auditoría con usuario, fecha/hora, entidad y motivo/observación (si aplica).  
4.2 El sistema debe permitir reconstruir la línea de tiempo del registro (creación, actualizaciones, cambios de estado).

### 5. Evidencia de verificación

5.1 Deben existir pruebas que demuestren que al “eliminar”/inactivar:
- El registro permanece en BD.  
- Cambia su estado.  
- Se conserva su relación con otras entidades.  

5.2 Debe existir evidencia de que un registro inactivo puede consultarse (historial), pero no permite operaciones operativas nuevas si la regla aplica.

---

### Resultado esperado

Información histórica preservada mediante estados activo/inactivo, sin eliminaciones físicas de datos relevantes, manteniendo relaciones, trazabilidad y disponibilidad para consulta histórica por roles autorizados.

---


