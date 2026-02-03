# HU-IDEAM-SNIF-REST-039

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-039\
> **Nombre Historia de Usuario:** Consulta de valores de dominio (_dom) por usuarios no administradores

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario registrador o usuario consulta.\
> **Quiero:** visualizar únicamente los valores de dominio (_dom) activos.\
> **Para:** garantizar el uso de información válida y consistente en los formularios y visualizaciones del sistema.

## CRITERIOS DE ACEPTACIÓN

1. **Disponibilidad de valores activos**  
   1.1 El sistema debe mostrar únicamente los valores de dominio con estado **Activo** para usuarios no administradores.  
   1.2 Los valores inactivos no deben estar disponibles para selección en formularios.

2. **Uso en formularios del sistema**  
   2.1 Los campos tipo lista desplegable (combo) deben cargar únicamente valores de dominio activos.  
   2.2 El listado debe cargarse dinámicamente desde las tablas de dominio del sistema.

3. **Visualización de valores históricos**  
   3.1 Cuando un valor de dominio inactivo esté asociado a información histórica, este debe visualizarse únicamente en modo lectura.  

## ROLES

- **Administrador IDEAM:**  Puede visualizar valores de dominio activos e inactivos desde las vistas de administración de catálogos.

- **Registrador:**  Visualiza y utiliza únicamente valores de dominio activos a través de los formularios de aplicación del módulo de restauración.

- **Usuario Consulta:**  Visualiza únicamente valores de dominio activos desde las opciones de consulta de proyectos y áreas restauradas aprobadas.

## RESTRICCIONES Y LÍMITES

- Los usuarios no administradores no pueden acceder a la administración de tablas de dominio.
- Los valores inactivos no deben ser seleccionables para nuevos registros.
- La visualización histórica no implica modificación del dato.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-039.png)(historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-039.png)
