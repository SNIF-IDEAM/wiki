# HU-IDEAM-SNIF-REST-090

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-090\
> **Nombre Historia de Usuario:** Cargar adjuntos a un proyecto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario registrador.\
> **Quiero:** adjuntar documentos a un proyecto.\
> **Para:** soportar técnica y administrativamente la información registrada.

## CRITERIOS DE ACEPTACIÓN

1. **Asociación automática del adjunto al proyecto**  
   1.1 El adjunto debe asociarse automáticamente a:  
   - relatedschema = 'proyecto'  
   - relatedtable = 'proyecto'  
   - relatedid = uuid_proyecto 

   1.2 Un proyecto debe permitir uno o múltiples adjuntos.  
   1.3 El usuario no debe ingresar manualmente el identificador del proyecto.

2. **Acceso desde interfaz del proyecto**  
   2.1 El registrador debe acceder desde el Listado de proyectos, pestaña Adjuntar Archivos.  
   2.2 El sistema debe mostrar claramente el código del proyecto al cual quedarán asociados los archivos.

3. **Métodos de carga**  
   3.1 El sistema debe permitir seleccionar un archivo desde el equipo mediante el botón “Seleccionar archivo”.  
   3.2 El sistema debe permitir arrastrar y soltar archivos en el área designada.  
   3.3 El botón “Cargar archivo” solo se habilita después de seleccionar el archivo.

4. **Validaciones previas a la carga**  
   4.1 Si el archivo no cumple condiciones de tamaño o formato, el sistema debe notificar al usuario y bloquear la carga.  

5. **Datos registrados del adjunto**  
   5.1 El sistema debe registrar como mínimo:  
   - filename, originalname, descripción, mimetype, size, path  
   - fch_creacion, fch_actualizacion  
   - relatedschema, relatedtable, relatedid  
   - fk_dom_estado_registro  
   
   5.2 Los archivos deben conservar su nombre original.

## ROLES

- **Administrador IDEAM:** No puede adjuntar documentos a un proyecto.
- **Registrador:** Puede adjuntar documentos a un proyecto de su entidad.
- **Usuario Consulta:** No puede adjuntar documentos a un proyecto.

## RESTRICCIONES Y LÍMITES

- La asociación al proyecto es automática y obligatoria.
- La carga está sujeta a validaciones de tamaño y formato.
- La disponibilidad depende del rol del usuario.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-090.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-090.png)