# HU-IDEAM-SNIF-REST-098

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-098\
> **Nombre Historia de Usuario:** Validar existencia del registro relacionado

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** validar que el registro relacionado exista antes de permitir la carga de un adjunto.\
> **Para:** evitar adjuntos huérfanos y asegurar integridad referencial.

## CRITERIOS DE ACEPTACIÓN

1. **Validación de existencia**  
   1.1 No se debe permitir cargar un adjunto si `relatedid` no existe.  
   1.2 La validación aplica inicialmente para Proyecto y se extiende a futuras entidades (áreas, acciones).

## ROLES

- **Administrador IDEAM:** Aplica validación del sistema.
- **Registrador:** Aplica validación del sistema.
- **Usuario Consulta:** No aplica.

## RESTRICCIONES Y LÍMITES

- Validación backend obligatoria antes de persistir el adjunto.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-098.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-098.png)