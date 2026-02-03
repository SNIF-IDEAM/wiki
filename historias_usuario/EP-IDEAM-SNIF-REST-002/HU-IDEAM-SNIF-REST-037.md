# HU-IDEAM-SNIF-REST-037

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-037\
> **Nombre Historia de Usuario:** Editar un registro de tabla de dominio (_dom)

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema.\
> **Quiero:** editar la descripción u otros atributos permitidos de un registro de dominio.\
> **Para:** corregir o actualizar la información sin afectar la integridad del sistema ni los registros históricos.

## CRITERIOS DE ACEPTACIÓN

1. **Acceso a la funcionalidad de edición**  
   1.1 El sistema debe permitir la edición de registros de dominio únicamente a usuarios con rol Administrador IDEAM.  
   1.2 La opción de edición debe estar disponible desde el listado de registros de una tabla _dom específica.

2. **Campos editables y no editables**  
   2.1 El código del valor no debe ser editable bajo ninguna circunstancia.  
   2.2 El sistema debe permitir editar únicamente los atributos definidos como modificables (por ejemplo: descripción, estado o vigencia).

3. **Restricciones por tipo de registro**  
   3.1 El sistema no debe permitir la edición de registros marcados como “de sistema”.  

4. **Validaciones de edición**  
   4.1 La descripción no debe permitirse vacía.  
   4.2 Los cambios realizados deben mantener coherencia semántica con los registros relacionados.

5. **Impacto de los cambios**  
   5.1 Las modificaciones realizadas deben aplicarse únicamente a nuevos registros o asociaciones dependientes.  
   5.2 Los registros históricos deben conservar el valor previamente asociado.

## ROLES

- **Administrador IDEAM:**  Puede editar la descripción u otros atributos permitidos de los registros de dominio (_dom).

- **Registrador:**  No puede editar registros de dominio. Consume los valores de dominio únicamente a través de los formularios del sistema.

- **Usuario Consulta:**  No puede editar registros de dominio. Visualiza los valores de dominio activos en información validada.

## RESTRICCIONES Y LÍMITES

- El código del registro no puede ser modificado.
- No se permite la edición de registros marcados como “de sistema”.
- Los cambios no deben afectar la trazabilidad de los registros históricos.
- El acceso a esta funcionalidad está restringido por rol.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-037.png)(historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-037.png)
