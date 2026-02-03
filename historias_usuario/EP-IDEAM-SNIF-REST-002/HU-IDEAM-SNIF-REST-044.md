# HU-IDEAM-SNIF-REST-044

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-044\
> **Nombre Historia de Usuario:** Validación de unicidad en tablas de dominio (_dom)

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** garantizar la unicidad de los valores registrados en las tablas de dominio (_dom).\
> **Para:** evitar ambigüedades, duplicidades semánticas y errores en la selección de valores dentro del módulo de restauración del SNIF.

## CRITERIOS DE ACEPTACIÓN

1. **Unicidad por tabla de dominio**  
   1.1 La validación de unicidad debe aplicarse de manera independiente para cada tabla de dominio (_dom).  
   1.2 La unicidad debe considerar el nombre del valor y su estado lógico.

2. **Unicidad por nombre**  
   2.1 El sistema no debe permitir registrar dos valores con el mismo nombre dentro de la misma tabla _dom.  
   2.2 La validación debe ser insensible a mayúsculas y minúsculas (case-insensitive).

3. **Unicidad sobre registros activos**  
   3.1 No pueden existir dos registros activos con el mismo nombre dentro de una tabla _dom.  
   3.2 Si existe un registro inactivo con el mismo nombre, el sistema debe informar al usuario y ofrecer la opción de reactivarlo.

4. **Normalización del nombre**  
   4.1 Antes de validar la unicidad, el sistema debe normalizar el texto ingresado considerando:  
   - Eliminación de espacios al inicio y al final.  
   - Eliminación de espacios duplicados.  
   - Conversión a minúsculas para comparación.

5. **Casos no permitidos**  
   5.1 No se debe permitir crear o editar un registro de dominio con:  
   - Nombre vacío.  
   - Nombre duplicado.  
   - Nombre equivalente semánticamente a otro existente.

6. **Comportamiento de la interfaz de usuario**  
   6.1 La validación de unicidad debe ejecutarse en tiempo real al perder el foco del campo nombre.  
   6.2 Si la validación falla, el sistema debe mostrar un mensaje claro indicando la existencia de un valor duplicado.  
   6.3 El botón de guardado debe permanecer deshabilitado mientras exista una inconsistencia de unicidad.  
   6.4 Cuando aplique, el sistema debe ofrecer la opción de reactivar un registro inactivo existente.

## ROLES

- **Administrador IDEAM:**  Puede crear, editar y gestionar valores de dominio (_dom) sujetos a las validaciones de unicidad definidas por el sistema.

- **Registrador:**  No puede crear ni editar valores de dominio. Consume únicamente valores de dominio activos a través de los formularios del sistema.

- **Usuario Consulta:**  No puede crear ni editar valores de dominio. Visualiza únicamente valores de dominio activos en información validada.

## RESTRICCIONES Y LÍMITES

- La validación de unicidad es obligatoria antes de permitir el guardado de un registro.
- No se permite duplicar valores activos ni equivalentes semánticos.
- La validación debe ejecutarse tanto en frontend como en backend.
- Esta funcionalidad es ejecutada automáticamente por el sistema.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-044.png)(historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-044.png)
