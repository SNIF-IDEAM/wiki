# HU-IDEAM-SNIF-REST-089

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-089\
> **Nombre Historia de Usuario:** Control de acceso por estado del proyecto en fuentes de financiamiento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** bloquear o habilitar la gestión de fuentes de financiamiento según el estado del proyecto.\
> **Para:** asegurar consistencia institucional y evitar modificaciones no permitidas durante el proceso de validación.

## CRITERIOS DE ACEPTACIÓN

1. **Control por estado del proyecto**  
   1.1 El sistema debe validar el estado del proyecto antes de permitir cualquier operación sobre las fuentes de financiamiento.

2. **Acciones permitidas por estado**  
   2.1 Cuando el proyecto se encuentre en estado **BORRADOR**, el sistema debe permitir:  
   - Crear fuentes de financiamiento.  
   - Editar fuentes de financiamiento.  
   - Eliminar fuentes de financiamiento (borrado lógico).

   2.2 Cuando el proyecto se encuentre en estado **ENVIADO IDEAM**, el sistema debe permitir únicamente la visualización de la información.

   2.3 Cuando el proyecto se encuentre en estado **APROBADO IDEAM**, el sistema debe permitir únicamente la visualización de la información.

   2.4 Cuando el proyecto se encuentre en estado **RECHAZADO IDEAM**, el sistema debe permitir únicamente la visualización hasta que se realicen las correcciones correspondientes.

3. **Restricción de interfaz**  
   3.1 Las opciones no permitidas según el estado del proyecto no deben mostrarse en la interfaz de usuario.  
   3.2 El sistema debe bloquear cualquier intento de modificación desde el backend.

## ROLES

- **Administrador IDEAM:** Puede visualizar y validar la información financiera según el estado del proyecto.
- **Registrador:** Puede gestionar fuentes de financiamiento únicamente cuando el proyecto está en estado **BORRADOR**.
- **Usuario Consulta:** Puede visualizar la información financiera validada.

## RESTRICCIONES Y LÍMITES

- No se permite modificar fuentes de financiamiento en proyectos enviados, aprobados o rechazados.
- El control por estado es obligatorio y no configurable.
- Todas las restricciones deben aplicarse de forma consistente en frontend y backend.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-089.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-089.png)
