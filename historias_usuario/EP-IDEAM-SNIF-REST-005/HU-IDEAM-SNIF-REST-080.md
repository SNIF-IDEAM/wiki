# HU-IDEAM-SNIF-REST-080

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-080\
> **Nombre Historia de Usuario:** Asociar fuente de financiamiento a un proyecto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario registrador.\
> **Quiero:** registrar fuentes de financiamiento para un proyecto.\
> **Para:** documentar su sostenibilidad económica de forma estructurada y trazable.

## CRITERIOS DE ACEPTACIÓN

1. **Asociación de fuentes de financiamiento**  
   1.1 El sistema debe permitir asociar una o varias fuentes de financiamiento a un proyecto.  
   1.2 La información debe almacenarse en la tabla intermedia `proyecto_fuente_financiacion`.

2. **Campos obligatorios**  
   2.1 El formulario debe requerir como mínimo:  
   - Fuente de financiación (dominio).  
   - Tipo de fuente (pública, privada, cooperación).  
   - Monto comprometido.  
   - Moneda.  
   - Fecha de registro.  
   - Estado del registro.
   - Tasa de cambio (Si aplica).

3. **Reglas de estado del proyecto**  
   3.1 Solo se permite asociar fuentes si el proyecto se encuentra en estado **BORRADOR**.  
   3.2 No se permite asociar, editar o inactivar fuentes si el proyecto está en estado ENVIADO IDEAM, APROBADO IDEAM o RECHAZADO IDEAM.

4. **Regla de unicidad**  
   4.1 No se permite registrar más de una vez la misma fuente de financiamiento activa para un mismo proyecto.

## ROLES

- **Administrador IDEAM:** Puede visualizar y validar la información asociada de fuentes de información de un proyecto.
- **Registrador:** Puede registrar fuentes de financiamiento para un proyecto.
- **Usuario Consulta:** Puede visualizar la información asociada de fuentes de información de un proyecto.

## RESTRICCIONES Y LÍMITES

- El botón Guardar solo se habilita cuando existe completitud e integridad de campos.
- El registro se crea inicialmente en estado BORRADOR.
- La validación del registro se realiza conforme a las épicas 7 y 8.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-080.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-080.png)
