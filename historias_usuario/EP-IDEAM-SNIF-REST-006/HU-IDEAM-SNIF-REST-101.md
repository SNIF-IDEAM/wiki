# HU-IDEAM-SNIF-REST-101

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-101\
> **Nombre Historia de Usuario:** Control de unicidad de adjuntos (cuando aplica)

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** evitar duplicados innecesarios de adjuntos cuando aplique.\
> **Para:** optimizar almacenamiento y mantener claridad documental.

## CRITERIOS DE ACEPTACIÓN

1. **Detección de duplicidad por contenido**  
   1.1 No se debe permitir cargar el mismo archivo (hash) dos veces sobre el mismo `relatedtable + relatedid`.  

2. **Reglas de excepción**  
   2.1 Se permite el mismo nombre de archivo si el contenido es diferente.  
   2.2 El sistema debe informar cuando detecte duplicidad.

## ROLES

- **Administrador IDEAM:** Aplica regla del sistema.
- **Registrador:** Aplica regla del sistema.
- **Usuario Consulta:** No aplica.

## RESTRICCIONES Y LÍMITES

- La validación se realiza por hash y relación del registro.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-101.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-101.png)