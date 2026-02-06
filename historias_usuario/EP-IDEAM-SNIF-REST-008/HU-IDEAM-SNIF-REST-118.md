# HU-IDEAM-SNIF-REST-118

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-118\
> **Nombre Historia de Usuario:** Vista de diferencias consolidada

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – Sistema de Validación IDEAM\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** Validador IDEAM.\
> **Quiero:** visualizar un resumen consolidado de los cambios realizados sobre proyectos y áreas antes de validar o rechazar.\
> **Para:** tomar decisiones informadas y reducir errores en el proceso de validación institucional.

## CRITERIOS DE ACEPTACIÓN

1. **Disponibilidad de la vista de diferencias**  
   1.1 El sistema debe mostrar la vista de diferencias consolidada antes de ejecutar una validación o rechazo, tanto individual como en lote.  
   1.2 La vista debe estar disponible para proyectos y áreas de restauración.

2. **Alcance de la información mostrada**  
   2.1 La vista debe consolidar todos los cambios pendientes asociados al elemento a validar.  
   2.2 En validaciones en lote, la vista debe consolidar los cambios de todos los elementos seleccionados.

3. **Tipos de cambios visualizados**  
   3.1 La vista debe mostrar como mínimo diferencias en:
   - Superficie  
   - Tipo de cobertura  
   - Coordenadas geográficas  
   - Datos generales del proyecto o área, cuando aplique  

4. **Presentación de diferencias (diff)**  
   4.1 Cada cambio debe presentarse comparando **valor anterior → valor nuevo**.  
   4.2 Los valores anteriores y nuevos deben diferenciarse visualmente mediante colores o estilos distintivos.  
   4.3 Los campos sin cambios no deben mostrarse en la vista consolidada.

5. **Agrupación de la información**  
   5.1 Los cambios deben agruparse por proyecto.  
   5.2 Dentro de cada proyecto, los cambios deben agruparse por área de restauración cuando aplique.  
   5.3 En validaciones en lote, debe identificarse claramente cada proyecto y área incluida.

6. **Contexto previo a la decisión**  
   6.1 La vista de diferencias debe mostrarse como paso previo obligatorio a la confirmación de validación o rechazo.  
   6.2 El usuario debe poder revisar la información antes de confirmar la acción.

7. **Comportamiento UX verificable**  
   7.1 La vista de diferencias debe presentarse en un modal o panel claramente separado de la vista principal.  
   7.2 El contenido debe ser legible, ordenado y permitir desplazamiento cuando el volumen de cambios lo requiera.  
   7.3 El sistema debe indicar visualmente si existen múltiples elementos incluidos en la validación en lote.

8. **Integridad y consistencia**  
   8.1 La información mostrada debe corresponder exactamente a los cambios registrados en los eventos pendientes.  
   8.2 La vista no debe permitir modificar la información presentada.

9. **Auditoría de la visualización**  
   9.1 El sistema debe registrar en auditoría la visualización de la vista de diferencias consolidada.  
   9.2 El registro debe asociarse al usuario validador y al conjunto de elementos revisados.

## ROLES

- **Validador IDEAM:** Visualiza la vista de diferencias antes de validar o rechazar.  
- **Administrador IDEAM:** Visualiza la vista de diferencias con fines de control y auditoría.  
- **Usuario Consulta:** No tiene acceso a la vista de diferencias.

## RESTRICCIONES Y LÍMITES

- La vista de diferencias es exclusivamente informativa.  
- No se permite editar datos desde la vista consolidada.  
- La validación o rechazo no puede ejecutarse sin que la vista de diferencias haya sido mostrada.  
- La información presentada corresponde únicamente a cambios pendientes.

## DIAGRAMA DE FLUJO DEL PROCESO

[![IMAGEN FLUJO DE ACTIVIDADES](/historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-118.png)](/historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-118.png)