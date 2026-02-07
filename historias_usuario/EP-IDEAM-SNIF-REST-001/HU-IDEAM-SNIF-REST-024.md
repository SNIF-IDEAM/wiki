# HU-IDEAM-SNIF-REST-024

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-024\
> **Nombre Historia de Usuario:** Aceptación de términos y condiciones y tratamiento de datos

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario autenticado o invitado.\
> **Quiero:** aceptar los términos y condiciones y el tratamiento de datos personales.\
> **Para:** cumplir los lineamientos legales e institucionales antes de usar el SNIF.

## CRITERIOS DE ACEPTACIÓN

1. **UX esperado**  
   1.1 Ventana modal obligatoria después del inicio de sesión o ingreso como invitado.  
   1.2 Contenido mínimo:  
   - Tratamiento de datos personales.  
   - Uso de la información.  
   - Condiciones generales del SNIF.  
   1.3 Checkbox obligatorio + botón Aceptar.

2. **Validaciones**  
   2.1 No se permite continuar sin aceptación explícita.  
   2.2 La aceptación se registra por sesión.

## ROLES

- **Todos los usuarios (autenticados e invitados):** Deben aceptar términos y condiciones antes de usar el sistema.

## RESTRICCIONES Y LÍMITES

- La aceptación es obligatoria para continuar.
- El modal no puede omitirse o cerrarse sin aceptación.
- La aceptación se registra por sesión de usuario.
