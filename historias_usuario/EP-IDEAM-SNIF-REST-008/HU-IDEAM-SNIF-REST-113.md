# HU-IDEAM-SNIF-REST-113

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-113\
> **Nombre Historia de Usuario:** Validación individual de proyecto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – Sistema de Validación IDEAM\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** Validador IDEAM.\
> **Quiero:** validar o rechazar un proyecto completo con un solo clic.\
> **Para:** aprobar proyectos sin necesidad de validar área por área.

## CRITERIOS DE ACEPTACIÓN

1. **Disponibilidad de acciones sobre el proyecto**  
   1.1 El sistema debe mostrar el botón **“Validar proyecto”** en el encabezado del proyecto.  
   1.2 El botón **“Validar proyecto”** también debe estar disponible en la vista expandida del proyecto.  
   1.3 El sistema debe mostrar el botón **“Rechazar”** junto a la opción de validación.

2. **Flujo de validación del proyecto**  
   2.1 Al validar un proyecto, el sistema debe marcar el proyecto como **validado** a nivel IDEAM.  
   2.2 El proyecto validado debe marcarse visual y funcionalmente como **completado**.  
   2.3 Al validar un proyecto, sus áreas que estén en estado pendiente deben **permanecer independientes** y no ser validadas automáticamente.  
   2.4 El sistema debe mostrar un mensaje de confirmación de éxito o error con descripción clara del resultado.

3. **Flujo de rechazo del proyecto**  
   3.1 Al seleccionar la opción **“Rechazar”**, el sistema debe abrir un modal con formulario obligatorio de motivo.  
   3.2 Un proyecto rechazado debe quedar bloqueado hasta que la entidad realice las correcciones correspondientes.  
   3.3 **Regla crítica:** al rechazar un proyecto, **todas sus áreas asociadas** deben pasar automáticamente al estado **REVISION_REQUERIDA**.

4. **Validaciones de negocio para validación**  
   4.1 El sistema solo debe permitir la validación del proyecto cuando el **estado_validacion_entidad = VALIDADO**.  
   4.2 El sistema solo debe permitir la validación cuando el **estado_validacion_ideam = PENDIENTE**.  
   4.3 Un proyecto validado no puede volver al estado **PENDIENTE** de forma directa.  
   4.4 El retorno a estado pendiente solo puede ocurrir mediante una **actualización posterior del proyecto**.

5. **Validaciones funcionales previas**  
   5.1 El sistema debe validar que el proyecto existe.  
   5.2 El sistema debe validar que el proyecto pertenece a la entidad actualmente filtrada.  
   5.3 El sistema debe validar que el usuario tenga permisos sobre la entidad del proyecto.  
   5.4 Si la acción es rechazo, el motivo debe ser obligatorio y tener **mínimo 20 caracteres**.

6. **Modal de rechazo – comportamiento verificable**  
   6.1 El modal de rechazo debe incluir:
   - Textarea obligatoria para el motivo del rechazo  
   - Contador visible de caracteres (mínimo 20)  
   - Textarea opcional para observaciones técnicas  
   - Botón **“Confirmar rechazo”** con estilo destructivo (rojo)  
   - Botón **“Cancelar”**  
   6.2 El sistema no debe permitir confirmar el rechazo si el motivo no cumple la longitud mínima.

7. **Modal de confirmación de validación**  
   7.1 Antes de validar el proyecto, el sistema debe mostrar un modal de confirmación.  
   7.2 El modal debe incluir como mínimo:
   - Nombre del proyecto  
   - Cantidad de áreas pendientes  
   - Advertencia visible si existen áreas pendientes (> 0)  
   - Checkbox obligatorio: **“Entiendo que esta acción es irreversible”**  
   7.3 La validación solo debe ejecutarse cuando el checkbox haya sido marcado.

8. **Prevención de doble envío y feedback visual**  
   8.1 Al enviar una acción de validación o rechazo, los botones deben deshabilitarse para evitar doble envío.  
   8.2 Al validar exitosamente, el sistema debe mostrar una animación de éxito con **checkmark verde**.

9. **Control por roles**  
   9.1 El rol **Validador IDEAM** puede validar y rechazar proyectos.  
   9.2 El rol **Administrador IDEAM** puede validar, rechazar y visualizar el histórico de cambios.  
   9.3 El rol **Consulta** no tiene acceso a esta funcionalidad.

10. **Auditoría de la validación del proyecto**  
    10.1 El sistema debe registrar un evento de auditoría por cada validación o rechazo del proyecto.  
    10.2 El evento de auditoría debe incluir como mínimo:
    - Usuario validador  
    - Timestamp exacto  
    - Estado anterior y nuevo  
    - Motivo del rechazo, cuando aplique  
    - Metadata del proyecto (nombre, entidad, área total)

## ROLES

- **Validador IDEAM:** Valida o rechaza proyectos individualmente.  
- **Administrador IDEAM:** Valida, rechaza y consulta el histórico de cambios.  
- **Usuario Consulta:** No tiene acceso a la validación de proyectos.

## RESTRICCIONES Y LÍMITES

- La validación del proyecto es irreversible salvo actualización posterior del mismo.  
- No se validan automáticamente las áreas al validar un proyecto.  
- El rechazo bloquea el proyecto hasta corrección por la entidad.  
- No se permite validar proyectos que no estén en estado Pendiente IDEAM.

## DIAGRAMA DE FLUJO DEL PROCESO

[![IMAGEN FLUJO DE ACTIVIDADES](assets/actividades-hu-ideam-snif-rest-113.png)](assets/actividades-hu-ideam-snif-rest-113.png)