# HU-IDEAM-SNIF-REST-105

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-105\
> **Nombre Historia de Usuario:** Clasificar adjuntos por tipo documental

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario registrador.\
> **Quiero:** clasificar el adjunto por tipo documental.\
> **Para:** facilitar la gestión documental y soportar auditoría institucional.

## CRITERIOS DE ACEPTACIÓN

1. **Campo tipo documental**  
   1.1 El sistema debe incluir el campo `fk_tipo_documento` (dominio configurable).  
   1.2 El campo debe ser obligatorio al cargar un adjunto.

2. **Valores mínimos del dominio**  
   2.1 El dominio debe permitir al menos:  
   - Informe técnico
   - Acta
   - Soporte administrativo
   - Evidencia fotográfica
   - Cartografía
   - Otros.  
   
   2.2 El dominio debe ser administrable por IDEAM.

## ROLES

- **Administrador IDEAM:** No puede clasificar adjuntos.
- **Registrador:** Puede clasificar adjuntos al cargar.
- **Usuario Consulta:** No puede realizar esta acción.

## RESTRICCIONES Y LÍMITES

- La clasificación es obligatoria y controlada por dominio.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-105.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-105.png)