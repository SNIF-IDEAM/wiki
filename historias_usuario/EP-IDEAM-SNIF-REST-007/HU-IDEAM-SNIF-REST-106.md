# HU-IDEAM-SNIF-REST-106

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-106\
> **Nombre Historia de Usuario:** Registro automático de eventos

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** crear automáticamente un evento cada vez que se realice un create o update en tablas operativas.\
> **Para:** garantizar trazabilidad completa de los cambios realizados por los usuarios.

## CRITERIOS DE ACEPTACIÓN

1. **Generación automática de evento**  
   1.1 El sistema debe generar un evento automáticamente cuando se cree o edite información operativa del módulo.  

2. **Cobertura mínima de tablas operativas**  
   2.1 Se debe generar evento cuando se crea o edita:  
   - proyecto  
   - adjuntos  
   - proyecto_dom_fte_financiacion  
   - Áreas de restauración  
   - Cualquier tabla operativa digitada por el registrador asociada al área de restauración  

3. **Información registrada del evento**  
   3.1 El evento debe registrar como mínimo:  
   - esquema_principal  
   - tabla_principal  
   - id_objeto_principal  
   - esquema_relacionado / tabla_relacionada / id_objeto_relacionado (cuando aplica)  
   - esquema_proyecto / tabla_proyecto / id_proyecto  

## ROLES

- **Administrador IDEAM:** Puede consultar eventos desde el menú Validaciones.
- **Registrador:** Puede consultar eventos desde el menú Validaciones.
- **Usuario Consulta:** No puede acceder a eventos.

## RESTRICCIONES Y LÍMITES

- La generación del evento es automática y no depende de acciones manuales del usuario.
- Los eventos deben conservar integridad referencial con los objetos registrados.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-007/assets/actividades-hu-ideam-snif-rest-106.png)(historias_usuario/EP-IDEAM-SNIF-REST-007/assets/actividades-hu-ideam-snif-rest-106.png)