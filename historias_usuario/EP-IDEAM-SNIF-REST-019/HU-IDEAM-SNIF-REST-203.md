# HU-IDEAM-SNIF-REST-203

> **Identificador Historia de Usuario:** HU-IDEAM-SNIF-REST-203\
> **Nombre Historia de Usuario:** Seleccionar y confirmar geometrías del archivo cargado

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario con perfil Registrador.\
> **Quiero:** seleccionar uno o varios polígonos del archivo geográfico cargado.\
> **Para:** asociarlos correctamente al área restaurada, asegurando que la geometría final represente el alcance espacial deseado.

## CRITERIOS DE ACEPTACIÓN

1. **Visualización previa de geometrías cargadas**\
1.1 El sistema debe mostrar en el visor geográfico todos los polígonos contenidos en el archivo cargado.\
1.2 Cada polígono debe visualizarse de forma individual y diferenciada para facilitar su identificación.

2. **Selección de polígonos**\
2.1 El sistema debe permitir al usuario seleccionar un único polígono del archivo cargado.\
2.2 El sistema debe permitir la selección de múltiples polígonos para conformar una geometría tipo Multipolígono.\
2.3 Los polígonos seleccionados deben resaltarse visualmente respecto a los no seleccionados.

3. **Vista de resumen de la selección**\
3.1 El sistema debe mostrar una vista de resumen con el número total de polígonos seleccionados.\
3.2 El sistema debe mostrar el área total resultante de la selección.\
3.3 La vista de resumen debe actualizarse dinámicamente según la selección realizada.

4. **Confirmación de la asociación**\
4.1 El sistema debe requerir una confirmación explícita del usuario antes de asociar la geometría seleccionada al área restaurada.\
4.2 Al confirmar, la geometría seleccionada debe quedar asociada al área restaurada en creación o edición.\
4.3 El sistema debe permitir cancelar la selección sin asociar ninguna geometría.

## ROLES

- **Administrador IDEAM**: No puede realizar esta acción.
- **Registrador**: Puede seleccionar y confirmar polígonos del archivo geográfico cargado.
- **Consulta**: No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- Solo se pueden seleccionar polígonos provenientes de un archivo geográfico previamente cargado y validado.
- No se permite asociar geometrías sin confirmación explícita del usuario.
- La selección de polígonos no debe modificar atributos no espaciales del área restaurada.
- La geometría seleccionada debe pasar posteriormente por las validaciones geométricas y de negocio definidas en el sistema.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-019/assets/actividades-hu-ideam-snif-rest-203.png)