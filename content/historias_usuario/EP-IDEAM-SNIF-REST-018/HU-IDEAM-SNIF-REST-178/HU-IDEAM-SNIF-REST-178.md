# HU-IDEAM-SNIF-REST-178

> **Identificador Historia de Usuario:**  hu-ideam-snif-rest-178 \
> **Nombre Historia de Usuario:**  Edición de geometría de un área restaurada

> **Sistema de información:**  Sistema Nacional de Información Forestal\
> **Módulo / subsistema:**  Módulo de restauración\
> **Validador temático(s):**  Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario con perfil Registrador.\
> **Quiero:** editar la geometría de un área restaurada desde el catálogo del sistema.\
> **Para:** corregir o actualizar su delimitación espacial, garantizando la consistencia de la información geográfica y sus procesos asociados.

## CRITERIOS DE ACEPTACIÓN

1. **Habilitación de la edición geométrica** \
1.1 El sistema debe mostrar la opción “Editar polígono” únicamente a usuarios con perfil Registrador.\
1.2 Al seleccionar la opción, el visor geográfico debe centrar y resaltar el área restaurada seleccionada.

2. **Modo de edición de la geometría**\
2.1 El sistema debe cargar la geometría en modo editable, permitiendo la manipulación directa de sus vértices y segmentos.\
2.2 La geometría editable debe mostrarse con un estilo visual diferenciado respecto a otras capas.

3. **Validación geométrica**\
3.1 El sistema debe validar que la geometría editada sea válida (polígono cerrado, sin autointersecciones).\
3.2 No se debe permitir guardar cambios si la geometría es inválida o vacía.

4. **Gestión de estados**\
4.1 Al iniciar la edición geométrica, el estado del área restaurada debe cambiar automáticamente a BORRADOR.\
4.2 Mientras el área se encuentre en estado BORRADOR, se debe bloquear la edición concurrente por otros usuarios.

5. **Confirmación y guardado de cambios**\
5.1 El sistema debe permitir al usuario confirmar o cancelar la edición realizada.\
5.2 Al confirmar, la nueva geometría debe guardarse correctamente en la base de datos.

## ROLES
- **Administrador IDEAM**: No puede realizar esta acción.
- **Registrador**:	Puede editar la geometría del área restaurada.
- **Consulta**:	No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- La edición geométrica solo puede realizarse sobre áreas restauradas activas.
- No se permite la edición simultánea de una misma geometría por más de un usuario.
- No se permite guardar geometrías inválidas o inconsistentes.
- La edición no modifica atributos no espaciales del área restaurada.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-018/assets/actividades-hu-ideam-snif-rest-178.png)