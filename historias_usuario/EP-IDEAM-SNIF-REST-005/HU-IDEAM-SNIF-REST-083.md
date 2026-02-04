# HU-IDEAM-SNIF-REST-083

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-083\
> **Nombre Historia de Usuario:** Editar información de una fuente de financiamiento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario registrador.\
> **Quiero:** editar la información financiera registrada de una fuente de financiamiento.\
> **Para:** reflejar ajustes o correcciones sin perder la trazabilidad institucional del proyecto.

## CRITERIOS DE ACEPTACIÓN

1. **Acceso a la edición**  
   1.1 El sistema debe permitir editar una fuente de financiamiento desde la sección *Fuentes de Financiamiento* del proyecto.  
   1.2 La opción *Editar* debe estar disponible en el menú de acciones de cada registro.

2. **Restricciones de edición**  
   2.1 No se debe permitir cambiar el proyecto asociado a la fuente de financiamiento.  
   2.2 No se debe permitir editar registros que se encuentren en proceso de validación IDEAM.

3. **Formulario de edición**  
   3.1 Al seleccionar la opción *Editar*, el sistema debe abrir un formulario con los datos actuales del registro.  
   3.2 El botón *Guardar* solo debe habilitarse cuando exista completitud e integridad de los campos.  

4. **Mensajes informativos**  
   4.1 Al guardar la edición, el sistema debe mostrar mensajes informativos sobre la acción realizada.  
   4.2 Al cancelar la edición, el sistema debe retornar a la vista de *Fuentes de Financiamiento* del proyecto.

5. **Cambio de estado y efectos**  
   5.1 Al editar un registro, este debe pasar automáticamente al estado **BORRADOR**.  
   5.2 Cualquier validación previa debe quedar invalidada.  
   5.3 El sistema debe recalcular automáticamente las sumatorias financieras del proyecto.

6. **Auditoría**  
   6.1 Toda edición debe generar un evento de auditoría con el detalle de los cambios realizados.

## ROLES

- **Administrador IDEAM:** Puede visualizar y validar la información financiera asociada al proyecto.
- **Registrador:** Puede editar la información financiera registrada.
- **Usuario Consulta:** Puede visualizar la información financiera asociada al proyecto.

## RESTRICCIONES Y LÍMITES

- No se permite editar fuentes de financiamiento en estado de validación.
- Toda edición reinicia el flujo de validación institucional.
- Las modificaciones no afectan registros históricos previos.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-083.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-083.png)
