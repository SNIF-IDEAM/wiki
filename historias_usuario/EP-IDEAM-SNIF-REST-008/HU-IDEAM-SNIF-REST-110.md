# HU-IDEAM-SNIF-REST-110

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-110\
> **Nombre Historia de Usuario:** Filtrado y consulta de eventos pendientes de validación IDEAM

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – Sistema de Validación IDEAM\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario Validador IDEAM o Administrador IDEAM.\
> **Quiero:** consultar y filtrar los eventos pendientes de validación IDEAM.\
> **Para:** priorizar, organizar y gestionar eficientemente el proceso de validación institucional.

## CRITERIOS DE ACEPTACIÓN

1. **Acceso al módulo de Validación IDEAM**  
   1.1 El sistema debe mostrar el menú “Validaciones” únicamente a los roles Validador IDEAM y Administrador IDEAM.  
   1.2 Los usuarios sin permisos no deben visualizar el menú ni las opciones del módulo.

2. **Vista principal de eventos pendientes**  
   2.1 La vista principal debe presentar un listado en formato **data table** de los eventos pendientes de validación IDEAM.  
   2.2 El listado debe ser visible inmediatamente al ingresar al módulo.  
   2.3 Cada evento debe mostrar como mínimo:
   - Identificador del evento  
   - Fecha de generación  
   - Tipo de objeto afectado  
   - Tipo de operación  
   - Proyecto asociado  
   - Estado del evento  

3. **Estados incluidos en el listado**  
   3.1 El listado debe incluir únicamente eventos con estados:
   - PENDIENTE DE VALIDACIÓN IDEAM  
   - EN PROCESO DE VALIDACIÓN  
   3.2 Los eventos en estado APROBADO o RECHAZADO no deben mostrarse por defecto.

4. **Filtros de búsqueda disponibles**  
   4.1 El sistema debe presentar los filtros de búsqueda visibles desde la vista principal.  
   4.2 El listado debe permitir filtrar eventos por:
   - Tipo de objeto  
   - Tipo de operación  
   - Proyecto  
   - Estado del evento  
   - Usuario que generó el evento  
   - Rango de fechas  

5. **Comportamiento de filtros con autocomplete**  
   5.1 Los campos de filtro con autocomplete deben iniciar la búsqueda a partir de **mínimo 2 caracteres ingresados**.  
   5.2 El autocomplete debe mostrar **máximo 10 resultados** por búsqueda.  
   5.3 Cuando existan más de 10 coincidencias, el listado de resultados debe presentar **scroll vertical**.  

6. **Comportamiento del filtrado**  
   6.1 Al aplicar filtros, el sistema debe actualizar el listado de forma inmediata.  
   6.2 El sistema debe mostrar un **indicador visual de carga** mientras se aplican los filtros.  
   6.3 El sistema debe permitir limpiar los filtros y retornar al listado completo de eventos pendientes.  
   6.4 El filtrado no debe modificar la información ni el estado de los eventos.

7. **Ordenamiento y contadores**  
   7.1 El listado de eventos debe mostrarse ordenado por fecha de generación de forma descendente por defecto.  
   7.2 El sistema debe permitir cambiar el criterio de ordenamiento desde la tabla.  
   7.3 Los contadores de eventos deben actualizarse automáticamente al aplicar filtros.  
   7.4 La actualización de contadores debe presentarse con **animación suave**, sin recargar la vista completa.

8. **Integridad referencial obligatoria**  
   8.1 Todo evento listado debe estar asociado a un objeto existente en el sistema.  
   8.2 Todo evento debe estar asociado a un proyecto cuando aplique.  
   8.3 No se deben mostrar eventos huérfanos o con referencias inconsistentes.

9. **Actualización dinámica del listado**  
   9.1 Cuando un evento cambia de estado como resultado de una validación o rechazo, debe desaparecer automáticamente del listado.  
   9.2 El listado debe reflejar siempre el estado actualizado de los eventos sin requerir recarga manual.

10. **Diseño responsive**  
    10.1 La vista del listado debe adaptarse a dispositivos móviles.  
    10.2 En vista móvil, los filtros deben presentarse en modo **colapsable**.  

11. **Auditoría de la consulta**  
    11.1 El sistema debe registrar en auditoría el acceso al módulo de Validaciones.  
    11.2 El sistema debe registrar las acciones de consulta y filtrado realizadas por los usuarios.

## ROLES

- **Validador IDEAM:** Accede al módulo de Validaciones y gestiona eventos pendientes.  
- **Administrador IDEAM:** Accede al módulo de Validaciones para consulta, control y auditoría.  
- **Registrador:** No tiene acceso al módulo de Validaciones.  
- **Usuario Consulta:** No tiene acceso al módulo de Validaciones.

## RESTRICCIONES Y LÍMITES

- Solo se listan eventos pendientes o en proceso de validación IDEAM.  
- No se permite modificar eventos desde la vista de consulta.  
- No se permiten eventos huérfanos o con referencias inválidas.  
- El acceso al listado está estrictamente controlado por rol.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-110.png)(historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-110.png)