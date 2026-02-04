# HU-IDEAM-SNIF-REST-001

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-001\
> **Nombre Historia de Usuario:** Visualizar visor geográfico principal

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario del SNIF (autenticado o invitado).\
> **Quiero:** acceder al visor geográfico principal.\
> **Para:** consultar y analizar espacialmente los proyectos de restauración validados por el IDEAM.

## CRITERIOS DE ACEPTACIÓN

1. **Modo de consulta**  
   1.1 El visor es de consulta, no permite edición de datos.

2. **Carga del visor**  
   2.1 El visor carga correctamente aunque no haya capas activas.

3. **Validación de información**  
   3.1 La información visualizada corresponde únicamente a registros validados por el IDEAM.

4. **Estructura del visor**  
   4.1 El visor se presenta con dos secciones:  
   - Área principal de visualización geográfica.  
   - Sidebar izquierdo colapsable.

## ROLES

- **Administrador IDEAM:** Puede acceder al visor.

- **Registrador:** Puede acceder al visor.

- **Usuario Consulta / Invitado:** Puede acceder al visor.

## RESTRICCIONES Y LÍMITES

- El visor es de solo consulta.
- Solo se visualizan proyectos validados por el IDEAM.
- El acceso está disponible para todos los roles del sistema.
