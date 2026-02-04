# HU-IDEAM-SNIF-REST-082

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-082\
> **Nombre Historia de Usuario:** Consultar historial de fuentes de financiamiento del proyecto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario del sistema.\
> **Quiero:** visualizar las fuentes de financiamiento asociadas a un proyecto.\
> **Para:** evaluar la trazabilidad económica y el historial financiero del proyecto.

## CRITERIOS DE ACEPTACIÓN

1. **Sección de fuentes de financiamiento**  
   1.1 El sistema debe disponer de una sección denominada *Fuentes de Financiamiento* dentro del formulario del proyecto.  
   1.2 La sección debe estar disponible en modo lectura según el rol del usuario.

2. **Listado de fuentes asociadas**  
   2.1 El sistema debe mostrar una tabla con las fuentes de financiamiento registradas.  
   2.2 Cada registro debe incluir como mínimo:  
   - Fuente de financiamiento.  
   - Tipo de aporte.  
   - Estado del registro.  
   - Fecha de registro.

3. **Filtros de consulta**  
   3.1 El sistema debe permitir filtrar las fuentes por tipo de aporte.  
   3.2 El sistema debe permitir búsquedas por palabras clave.

4. **Paginación y descarga**  
   4.1 El listado debe contar con paginación configurable.  
   4.2 El sistema debe permitir la descarga del listado en formato Excel.

## ROLES

- **Administrador IDEAM:** Puede visualizar y validar la información asociada a las fuentes de financiamiento del proyecto.
- **Registrador:** Puede visualizar las fuentes de financiamiento asociadas al proyecto.
- **Usuario Consulta:** Puede visualizar la información financiera asociada al proyecto.

## RESTRICCIONES Y LÍMITES

- La consulta es únicamente de lectura.
- No se permite edición desde esta funcionalidad.
- El acceso a la información depende del estado del proyecto y del rol del usuario.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-082.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-082.png)
