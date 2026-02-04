# HU-IDEAM-SNIF-REST-085

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-085\
> **Nombre Historia de Usuario:** Auditoría y trazabilidad de fuentes de financiamiento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** auditar todas las operaciones realizadas sobre las fuentes de financiamiento.\
> **Para:** garantizar trazabilidad, control institucional y transparencia en la gestión financiera de los proyectos.

## CRITERIOS DE ACEPTACIÓN

1. **Registro de eventos de auditoría**  
   1.1 El sistema debe registrar automáticamente todas las operaciones realizadas sobre fuentes de financiamiento.  
   1.2 Las operaciones auditadas deben incluir como mínimo: crear, editar, validar y desactivar.

2. **Información registrada en auditoría**  
   2.1 Cada evento de auditoría debe almacenar:  
   - Usuario que ejecuta la acción.  
   - Rol del usuario.  
   - Tipo de operación realizada.  
   - Fecha y hora de la operación.  
   - Valores antes y después del cambio.

3. **Persistencia y trazabilidad**  
   3.1 Los registros de auditoría no deben ser modificables ni eliminables desde la interfaz.  
   3.2 La información debe conservarse para consulta histórica y control institucional.

4. **Consulta de auditoría**  
   4.1 El sistema debe permitir la consulta de la auditoría a los roles autorizados conforme a las reglas del sistema.

## ROLES

- **Administrador IDEAM:** Puede consultar los registros de auditoría de fuentes de financiamiento.
- **Registrador:** No puede consultar ni modificar la auditoría.
- **Usuario Consulta:** No puede consultar ni modificar la auditoría.

## RESTRICCIONES Y LÍMITES

- Los registros de auditoría son inmutables.
- La auditoría se genera de forma automática, sin intervención del usuario.
- El acceso a la información de auditoría está restringido por rol.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-085.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-085.png)
