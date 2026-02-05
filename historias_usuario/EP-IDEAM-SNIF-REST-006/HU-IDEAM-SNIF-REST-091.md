# HU-IDEAM-SNIF-REST-091

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-091\
> **Nombre Historia de Usuario:** Validar tamaño máximo del archivo adjunto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** validar que el archivo no supere el tamaño máximo permitido.\
> **Para:** garantizar uso eficiente del almacenamiento y seguridad documental.

## CRITERIOS DE ACEPTACIÓN

1. **Tamaño máximo configurable**  
   1.1 El sistema debe usar un parámetro configurable para el tamaño máximo permitido.  

2. **Bloqueo por exceder límite**  
   2.1 Si el archivo excede el límite, el sistema debe bloquear la carga.  
   2.2 El sistema debe mostrar un mensaje claro al usuario indicando el motivo.

## ROLES

- **Administrador IDEAM:** Aplica validación del sistema.
- **Registrador:** Aplica validación del sistema.
- **Usuario Consulta:** No aplica.

## RESTRICCIONES Y LÍMITES

- El tamaño máximo se gestiona por parámetro del sistema.
- No se permite continuar con carga si excede el límite.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-091.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-091.png)