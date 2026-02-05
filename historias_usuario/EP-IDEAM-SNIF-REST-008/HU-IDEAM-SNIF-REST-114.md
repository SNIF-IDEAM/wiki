# HU-IDEAM-SNIF-REST-114

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-114\
> **Nombre Historia de Usuario:** Validación individual de área de restauración

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – Sistema de Validación IDEAM\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** Validador IDEAM.\
> **Quiero:** validar o rechazar áreas de restauración de forma independiente.\
> **Para:** permitir avances parciales cuando solo algunas áreas requieren corrección.

## CRITERIOS DE ACEPTACIÓN

1. **Disponibilidad de acciones sobre el área**  
   1.1 Cada área de restauración en estado **Pendiente** debe mostrar el botón **“Validar”**.  
   1.2 Cada área de restauración en estado **Pendiente** debe mostrar el botón **“Rechazar”**.  
   1.3 Las acciones de validación y rechazo deben estar disponibles a nivel individual por área.

2. **Flujo de validación del área**  
   2.1 La validación de un área debe actualizar únicamente el estado del área validada.  
   2.2 La validación de un área no debe afectar el estado del proyecto asociado.  
   2.3 La validación de un área no debe afectar el estado de otras áreas del proyecto.  
   2.4 El sistema debe permitir validar un área incluso si el proyecto asociado aún se encuentra en estado **Pendiente**.

3. **Flujo de rechazo del área**  
   3.1 Un área rechazada debe poder ser corregida por la entidad responsable.  
   3.2 Una vez corregida por la entidad, el área debe poder volver al estado **Pendiente** para nueva validación IDEAM.

4. **Validaciones de negocio para validación de área**  
   4.1 El sistema solo debe permitir validar un área cuando **activo = TRUE**.  
   4.2 El sistema solo debe permitir validar un área cuando su estado actual sea **Pendiente**.  
   4.3 Si el proyecto asociado al área se encuentra en estado **Rechazado**, el área debe pasar automáticamente al estado **REVISION_REQUERIDA**.  
   4.4 Un área en estado **REVISION_REQUERIDA** no debe ser validable.

5. **Herencia de estado en entidades dependientes**  
   5.1 Un área que tenga tablas dependientes futuras (por ejemplo: especies, monitoreos) debe heredar su estado de validación.  
   5.2 El cambio de estado del área debe reflejarse en sus entidades dependientes.

6. **Validaciones funcionales previas**  
   6.1 El sistema debe validar que el área exista.  
   6.2 El sistema debe validar que el área pertenezca al proyecto correspondiente.  
   6.3 El sistema debe validar que la superficie del área sea mayor a **0 hectáreas**.  
   6.4 El sistema debe validar que las coordenadas geográficas del área se encuentren dentro del territorio de **Colombia**.  
   6.5 Si la acción es rechazo, el motivo debe ser obligatorio y tener un mínimo de **15 caracteres**.

7. **Visualización de eventos del área**  
   7.1 Cada área debe disponer del botón **“Ver eventos”**.  
   7.2 Al seleccionar **“Ver eventos”**, el sistema debe mostrar un modal con el timeline de cambios del área.  
   7.3 El modal de eventos debe mostrar como mínimo:
   - Cambios en superficie  
   - Cambios en tipo de cobertura  
   - Cambios en coordenadas geográficas  
   - Visualización de diferencias (antes → después) con colores distintivos  

8. **UX verificable durante la validación**  
   8.1 La validación del área debe realizarse mediante confirmación **inline**, sin modal adicional.  
   8.2 Al validar un área exitosamente, el sistema debe mostrar un **toast de éxito** con el nombre del área validada.  
   8.3 Durante el procesamiento de la validación o rechazo, el botón correspondiente debe deshabilitarse y mostrar un **spinner**.  
   8.4 El modal de rechazo debe ser similar al de proyecto, pero en una versión más compacta.

9. **Control por roles**  
   9.1 El rol **Validador IDEAM** puede validar y rechazar áreas de restauración.  
   9.2 El rol **Administrador IDEAM** puede validar, rechazar y **forzar revisión** del área.  
   9.3 El rol **Consulta** no tiene acceso a esta funcionalidad.

10. **Auditoría de la validación del área**  
    10.1 El sistema debe registrar un evento de auditoría por cada validación o rechazo de área.  
    10.2 El evento de auditoría debe incluir como mínimo:
    - Datos del área (superficie, coordenadas, tipo de cobertura)  
    - Usuario responsable  
    - Timestamp exacto  
    - Estado anterior y nuevo  
    - Motivo del rechazo, cuando aplique  

## ROLES

- **Validador IDEAM:** Valida y rechaza áreas de restauración de forma individual.  
- **Administrador IDEAM:** Valida, rechaza y puede forzar revisión de áreas.  
- **Usuario Consulta:** No tiene acceso a la validación de áreas.

## RESTRICCIONES Y LÍMITES

- No se permite validar áreas inactivas.  
- No se permite validar áreas que no estén en estado Pendiente.  
- Las áreas no son validables cuando el proyecto está rechazado.  
- La validación de un área no altera el estado del proyecto.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-114.png)(historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-114.png)