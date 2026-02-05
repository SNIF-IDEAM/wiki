# HU-IDEAM-SNIF-REST-207

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-207\
> **Nombre Historia de Usuario:** Administrar reinos biológicos

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario administrador.\
> **Quiero:** administrar el catálogo de reinos biológicos.\
> **Para:** definir y mantener el nivel taxonómico base del sistema de manera controlada y consistente.

## CRITERIOS DE ACEPTACIÓN

1. **Vista de catálogo de reinos**\
1.1 El sistema debe presentar una vista tipo catálogo con un listado tabulado de los reinos registrados.\
1.2 El listado debe permitir visualizar los registros activos e inactivos.

2. **Campos visibles en el catálogo**\
2.1 Cada registro debe mostrar como mínimo los siguientes campos:

- Nombre del reino.
- Estado (activo / inactivo).
- Fecha de creación.
- Fecha de actualización.

3. **Creación de reinos biológicos**\
3.1 El sistema debe permitir crear un nuevo reino biológico.\
3.2 El nombre del reino debe ser obligatorio.\
3.3 El sistema debe validar que el nombre del reino sea único.

4. **Edición de reinos biológicos**\
4.1 El sistema debe permitir editar la información del reino.\
4.2 La edición no debe afectar registros históricos asociados.

5. **Activación e inactivación de reinos**\
5.1 El sistema debe permitir activar o desactivar un reino biológico.\
5.2 Si un reino se encuentra inactivo, no debe estar disponible en formularios dependientes.

6. **Persistencia y trazabilidad**\
6.1 El sistema debe registrar la fecha de creación y actualización de cada reino.\
6.2 Todas las acciones deben quedar registradas para fines de auditoría.

## ROLES

- **Administrador IDEAM**:	Puede crear, editar, activar e inactivar reinos biológicos.
- **Registrador**:	No puede realizar esta acción.
- **Consulta**:	No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- No se permite eliminar reinos biológicos.
- La inactivación es lógica y controlada.
- Los reinos inactivos no pueden ser usados en formularios dependientes.
- El nombre del reino debe ser único en el catálogo.
- La administración del catálogo es exclusiva del perfil Administrador IDEAM.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/assets/actividades-hu-ideam-snif-rest-207.png)