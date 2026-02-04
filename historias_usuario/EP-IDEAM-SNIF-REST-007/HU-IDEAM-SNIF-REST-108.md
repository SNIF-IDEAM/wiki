# HU-IDEAM-SNIF-REST-108

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-108\
> **Nombre Historia de Usuario:** Gestión del flujo de estados del evento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** gestionar el flujo de estados y comentarios asociados a un evento.\
> **Para:** soportar el ciclo de validación institucional y la trazabilidad de transiciones.

## CRITERIOS DE ACEPTACIÓN

1. **Registro del flujo del evento**  
   1.1 El sistema debe registrar el flujo del evento (flujo_evento) incluyendo:  
   - Usuario responsable  
   - Fecha  
   - Comentario  

2. **Comentario obligatorio en rechazo**  
   2.1 El comentario debe ser obligatorio cuando el evento sea rechazado.  

3. **Transiciones y trazabilidad**  
   3.1 Cada transición de estado debe quedar registrada en el flujo del evento con usuario y fecha.  

## ROLES

- **Administrador IDEAM:** Puede gestionar el flujo del evento conforme a permisos del menú Validaciones.
- **Registrador:** Puede consultar el historial de flujo y comentarios.
- **Usuario Consulta:** No puede acceder a eventos.

## RESTRICCIONES Y LÍMITES

- El comentario es obligatorio para rechazos.
- El historial de flujo no debe perderse ni sobrescribirse.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-007/assets/actividades-hu-ideam-snif-rest-108.png)(historias_usuario/EP-IDEAM-SNIF-REST-007/assets/actividades-hu-ideam-snif-rest-108.png)