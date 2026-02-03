# HU-IDEAM-SNIF-REST-195

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-195\
> **Nombre Historia de Usuario:** Actualizar geometría de un área restaurada mediante archivo

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario con perfil Registrador.\
> **Quiero:** actualizar la geometría de un área restaurada mediante la carga de un nuevo archivo geográfico.\
> **Para:** corregir o actualizar su delimitación espacial de forma controlada, garantizando trazabilidad y consistencia de la información.

## CRITERIOS DE ACEPTACIÓN

1. **Acceso a la funcionalidad**\
1.1 Desde el catálogo o listado de áreas restauradas, el sistema debe habilitar la opción “Actualizar geometría” únicamente para usuarios con rol Registrador.\
1.2 La opción solo debe estar disponible para áreas que no se encuentren bloqueadas por procesos de validación IDEAM.

2. **Ventana de actualización de geometría**\
2.1 Al seleccionar la opción, el sistema debe abrir una ventana o modal de actualización.\
2.2 El modal debe mostrar:

- La geometría actual del área restaurada en un visor geográfico en modo solo lectura.
- El estado actual del área restaurada.

3. **Carga de archivo geográfico**\
3.1 El sistema debe permitir la carga de un nuevo archivo geográfico en formatos permitidos (SHP, GeoJSON u otros definidos por el sistema).\
3.2 El archivo cargado debe ser validado estructural y espacialmente antes de permitir su confirmación.

4. **Visualización comparativa**\
4.1 El sistema debe permitir visualizar la nueva geometría superpuesta a la geometría actual.\
4.2 La visualización debe ser únicamente de apoyo, sin permitir edición gráfica directa.

5. **Confirmación y efectos de la actualización**\
5.1 Al confirmar la carga del nuevo archivo:

- El área restaurada debe cambiar automáticamente a estado **BORRADOR**.
- La versión geométrica anterior debe quedar invalidada para uso operativo.    
5.2 El sistema debe garantizar que solo una geometría vigente esté activa por área restaurada.

6. **Bloqueos por estado**\
6.1 No se debe permitir la actualización de la geometría si el área restaurada se encuentra en proceso de validación IDEAM.

## ROLES

- **Administrador IDEAM**:	No puede realizar esta acción.
- **Registrador**:	Puede actualizar la geometría mediante carga de archivo.
- **Consulta**:	No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- No se permite edición gráfica directa (dibujar, mover vértices, modificar geometría).
- Toda actualización geométrica se realiza exclusivamente mediante reemplazo de archivo geográfico.
- El visor geográfico es únicamente de apoyo visual.
- Cada actualización debe quedar sujeta a procesos de recalculo y auditoría definidos en otras HU.
- La geometría anterior se conserva solo para fines históricos y de trazabilidad.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-018/assets/actividades-hu-ideam-snif-rest-195.png)