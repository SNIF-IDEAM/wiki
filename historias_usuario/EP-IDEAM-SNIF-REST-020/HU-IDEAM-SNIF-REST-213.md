# HU-IDEAM-SNIF-REST-213

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-213\
> **Nombre Historia de Usuario:** Uso de especies en áreas restauradas

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** restringir la edición del catálogo de especies cuando estas ya están en uso.\
> **Para:** preservar la integridad histórica y la trazabilidad de la información en las áreas restauradas.

## CRITERIOS DE ACEPTACIÓN

1. **Validación de uso de especies**\
1.1 El sistema debe identificar si una especie se encuentra asociada a una o más áreas restauradas.\
1.2 Esta validación debe ejecutarse antes de cualquier acción de edición o eliminación.

2. **Restricción de eliminación**\
2.1 Si una especie está asociada a un área restaurada, el sistema no debe permitir su eliminación.\
2.2 La eliminación solo estará permitida para especies que no tengan asociaciones registradas.

3. **Edición permitida en especies en uso**\
3.1 Si una especie está en uso, el sistema solo debe permitir el cambio de su estado (activo / inactivo).\
3.2 No se debe permitir la modificación de atributos estructurales de la especie.

4. **Restricción de modificación de nombre**\
4.1 El nombre científico de la especie no debe poder modificarse si la especie ya ha sido utilizada en áreas restauradas.\
4.2 Esta restricción podrá configurarse como obligatoria u opcional según la política definida por la entidad administradora.

5. **Mensajes de negocio**\
5.1 El sistema debe mostrar mensajes claros y explícitos cuando una acción no esté permitida.\
5.2 Los mensajes deben indicar que la restricción se debe a la asociación con áreas restauradas.

6. **Trazabilidad y consistencia**\
6.1 Todas las acciones permitidas sobre especies en uso deben quedar registradas en auditoría.\
6.2 La integridad de los datos históricos debe preservarse en todo momento.

## ROLES

- **Administrador IDEAM**:	Puede cambiar el estado de especies en uso, sin modificar atributos estructurales.
- **Registrador**:	No puede realizar esta acción.
- **Consulta**:	No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- No se permite eliminar especies asociadas a áreas restauradas.
- No se permite modificar el nombre de especies ya utilizadas (según política).
- Solo se permite cambio de estado para especies en uso.
- Se garantiza la integridad histórica de los registros.
- Todas las restricciones son validadas automáticamente por el sistema.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/assets/actividades-hu-ideam-snif-rest-213.png)