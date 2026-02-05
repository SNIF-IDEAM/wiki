# HU-IDEAM-SNIF-REST-107

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-107\
> **Nombre Historia de Usuario:** Clasificación del tipo de afectación del evento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** asociar un tipo de afectación a cada evento.\
> **Para:** identificar la naturaleza del cambio realizado.

## CRITERIOS DE ACEPTACIÓN

1. **Asociación obligatoria del tipo de afectación**  
   1.1 Cada evento debe contar con un tipo de afectación asociado.  

2. **Dominio controlado**  
   2.1 El tipo de afectación debe provenir del dominio `dom_tipo_afectacion`.  
   2.2 Ejemplos: CREATE, UPDATE.  

3. **Validación de valores activos**  
   3.1 El evento solo puede registrar valores activos del dominio.  
   3.2 Si el valor no es válido o no está activo, el sistema debe bloquear el registro del evento.

## ROLES

- **Administrador IDEAM:** Puede consultar eventos y su tipo de afectación.
- **Registrador:** Puede consultar eventos y su tipo de afectación.
- **Usuario Consulta:** No puede acceder a eventos.

## RESTRICCIONES Y LÍMITES

- La clasificación es obligatoria y controlada por dominio.
- Validación backend obligatoria.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-007/assets/actividades-hu-ideam-snif-rest-107.png)(historias_usuario/EP-IDEAM-SNIF-REST-007/assets/actividades-hu-ideam-snif-rest-107.png)