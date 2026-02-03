# HU-IDEAM-SNIF-REST-210

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-210\
> **Nombre Historia de Usuario:** Administrar géneros

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario administrador.\
> **Quiero:** administrar los géneros asociados a una familia.\
> **Para:** clasificar correctamente las especies dentro de la jerarquía taxonómica del sistema.

## CRITERIOS DE ACEPTACIÓN

1. **Vista de catálogo de géneros**\
1.1 El sistema debe presentar una vista tipo catálogo con el listado de géneros registrados.\
1.2 El sistema debe permitir filtros encadenados por jerarquía taxonómica:

- Reino → Filum → Familia.

2. **Campos visibles en el catálogo**\
2.1 Cada registro de género debe mostrar como mínimo los siguientes campos:

- Familia asociada.
- Nombre del género.
- Estado (activo / inactivo).
- Fecha de creación.
- Fecha de actualización.

3. **Creación de géneros**\
3.1 El sistema debe permitir crear un nuevo género.\
3.2 El género debe estar obligatoriamente asociado a una familia existente.\
3.3 El sistema debe validar la unicidad del género dentro de la familia.

4. **Edición de géneros**\
4.1 El sistema debe permitir editar la información del género.\
4.2 No se debe permitir la edición del padre (familia) si existen especies asociadas al género.

5. **Activación e inactivación de géneros**\
5.1 El sistema debe permitir activar o desactivar un género.\
5.2 No se debe permitir activar un género si la familia asociada se encuentra inactiva.

6. **Persistencia y trazabilidad**\
6.1 El sistema debe registrar la fecha de creación y actualización de cada género.\
6.2 Todas las acciones deben quedar registradas para fines de auditoría.

## ROLES

- **Administrador IDEAM**:	Puede crear, editar, activar e inactivar géneros.
. **Registrador**:	No puede realizar esta acción.
- **Consulta**:	No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- No se permite eliminar géneros.
- No se puede activar un género si su familia está inactiva.
- No se permite modificar la familia asociada si existen especies dependientes.
- La inactivación es lógica y controlada.
- La validación de unicidad debe realizarse por familia.
- La administración del catálogo es exclusiva del perfil Administrador IDEAM.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/assets/actividades-hu-ideam-snif-rest-210.png)