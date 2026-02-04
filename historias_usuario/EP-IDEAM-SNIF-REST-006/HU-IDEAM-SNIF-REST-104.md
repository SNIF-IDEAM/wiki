# HU-IDEAM-SNIF-REST-104

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-104\
> **Nombre Historia de Usuario:** Visualizar adjuntos según estado del proyecto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** restringir la visualización de adjuntos según el estado del proyecto.\
> **Para:** proteger información no validada y controlar el acceso documental.

## CRITERIOS DE ACEPTACIÓN

1. **Reglas por estado**  
   1.1 Proyectos en BORRADOR / EN EDICIÓN: visibles solo para Registrador de la entidad y Administrador IDEAM.  
   1.2 Proyectos validados / publicados: visibles para usuarios autorizados según rol.  
   1.3 Usuarios invitados: solo pueden ver adjuntos de proyectos validados.

## ROLES

- **Administrador IDEAM:** Puede visualizar según estado del proyecto.
- **Registrador:** Puede visualizar según estado y pertenencia de entidad.
- **Usuario Consulta:** Visualiza solo cuando aplica estado validado/publicado.

## RESTRICCIONES Y LÍMITES

- El acceso depende de estado del proyecto y rol del usuario.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-104.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-104.png)