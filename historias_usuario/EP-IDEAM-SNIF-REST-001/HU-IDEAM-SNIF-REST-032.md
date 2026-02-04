# HU-IDEAM-SNIF-REST-032

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-032\
> **Nombre Historia de Usuario:** Información general del Módulo de Restauración

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario autenticado o invitado.\
> **Quiero:** conocer el objetivo y alcance del Módulo de Restauración.\
> **Para:** entender el uso y las limitaciones de la herramienta antes de interactuar con ella.

## CRITERIOS DE ACEPTACIÓN

1. **UX esperado - Modal informativo**  
   1.1 Ventana modal obligatoria al primer ingreso al Módulo de Restauración.  
   1.2 Se presenta después de:  
   - Aceptación de términos y condiciones.  
   - Selección del módulo.

2. **Contenido del modal**  
   2.1 El modal debe incluir:  
   - **Objetivo del módulo:** Descripción clara del propósito del Módulo de Restauración.  
   - **Alcance funcional:** Funcionalidades disponibles según el perfil.  
   - **Tipo de información disponible:** Solo datos validados por IDEAM.  
   - **Limitaciones:** Información sobre restricciones y políticas de uso.

3. **Interacción obligatoria**  
   3.1 Checkbox obligatorio para confirmar lectura y comprensión.  
   3.2 Botón "Aceptar" o "Continuar" para proceder.  
   3.3 El modal no puede cerrarse sin aceptación explícita.

4. **Validaciones**  
   4.1 No se permite continuar sin aceptación explícita del checkbox.  
   4.2 El sistema registra la aceptación con fecha y hora.

5. **Frecuencia de visualización**  
   5.1 El modal se muestra solo en el primer ingreso al módulo por sesión.  
   5.2 Opción para volver a consultar la información desde el menú de ayuda.

## ROLES

- **Todos los usuarios (autenticados e invitados):** Deben visualizar y aceptar la información del módulo antes de interactuar con él.

## RESTRICCIONES Y LÍMITES

- El modal es obligatorio y no puede omitirse.
- La información debe ser clara, concisa y en lenguaje institucional.
- El contenido del modal debe poder actualizarse sin cambios en el código.
- La aceptación se registra para trazabilidad.
- El modal debe respetar la identidad visual institucional IDEAM-SNIF.

