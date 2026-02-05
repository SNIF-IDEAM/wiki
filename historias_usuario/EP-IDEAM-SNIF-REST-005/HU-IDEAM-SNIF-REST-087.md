# HU-IDEAM-SNIF-REST-087

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-087\
> **Nombre Historia de Usuario:** Eliminar (borrado lógico) una fuente de financiamiento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario registrador.\
> **Quiero:** eliminar una fuente de financiamiento asociada a un proyecto mediante borrado lógico.\
> **Para:** corregir errores sin afectar la trazabilidad ni la integridad histórica de la información financiera.

## CRITERIOS DE ACEPTACIÓN

1. **Borrado lógico del registro**  
   1.1 El sistema debe permitir la eliminación lógica de una fuente de financiamiento estableciendo su estado como inactivo.  
   1.2 La eliminación lógica no debe borrar físicamente el registro de la base de datos.

2. **Condiciones para la eliminación**  
   2.1 Solo se debe permitir eliminar una fuente de financiamiento cuando el registro se encuentre en estado **BORRADOR**.  
   2.2 El proyecto asociado debe encontrarse en estado **BORRADOR**.

3. **Efectos de la eliminación**  
   3.1 Al eliminar una fuente, el sistema debe recalcular automáticamente:  
   - El total financiado del proyecto.  
   - El porcentaje de financiación.  

4. **Auditoría**  
   4.1 Toda eliminación lógica debe generar un evento de auditoría con el detalle de la acción realizada.

## ROLES

- **Administrador IDEAM:** Puede visualizar la información financiera asociada al proyecto.
- **Registrador:** Puede eliminar fuentes de financiamiento en estado **BORRADOR**.
- **Usuario Consulta:** Puede visualizar la información financiera asociada al proyecto.

## RESTRICCIONES Y LÍMITES

- No se permite la eliminación física de fuentes de financiamiento.
- No se permite eliminar fuentes en proyectos enviados o aprobados.
- Toda eliminación queda registrada para fines de trazabilidad.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-087.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-087.png)
