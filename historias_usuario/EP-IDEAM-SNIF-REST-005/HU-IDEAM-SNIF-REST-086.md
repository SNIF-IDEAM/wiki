# HU-IDEAM-SNIF-REST-086

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-086\
> **Nombre Historia de Usuario:** Control de acceso por rol en fuentes de financiamiento

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** restringir las operaciones CRUD sobre las fuentes de financiamiento según el rol del usuario.\
> **Para:** garantizar seguridad, gobernanza del dato y cumplimiento de los lineamientos institucionales del IDEAM.

## CRITERIOS DE ACEPTACIÓN

1. **Restricción por rol**  
   1.1 El sistema debe aplicar controles de acceso diferenciados según el rol del usuario.  

2. **Permisos por tipo de usuario**  
   2.1 El **Usuario Consulta / Invitado**:  
   - No puede asociar, editar, eliminar ni validar fuentes de financiamiento.  
   - Puede visualizar la información financiera asociada al proyecto.  

   2.2 El **Usuario Registrador**:  
   - Puede acceder a la opción de gestión de fuentes de financiamiento.  
   - Puede asociar, editar y eliminar fuentes de financiamiento conforme al estado del proyecto.  

   2.3 El **Administrador IDEAM**:  
   - No puede asociar ni editar fuentes de financiamiento.  
   - Puede visualizar y validar la información financiera conforme a los flujos institucionales.

3. **Validación automática**  
   3.1 El sistema debe validar el rol del usuario antes de habilitar cualquier acción sobre las fuentes de financiamiento.  
   3.2 Las opciones no permitidas no deben mostrarse en la interfaz de usuario.

## ROLES

- **Administrador IDEAM:** Puede visualizar y validar la información financiera, sin realizar operaciones de registro.
- **Registrador:** Puede gestionar fuentes de financiamiento según reglas y estados del proyecto.
- **Usuario Consulta:** Solo puede visualizar la información financiera validada.

## RESTRICCIONES Y LÍMITES

- El acceso a las funcionalidades está condicionado por rol y estado del proyecto.
- No se permite la elevación de privilegios desde la interfaz.
- Todas las restricciones deben aplicarse tanto a nivel de interfaz como de backend.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-086.png)(historias_usuario/EP-IDEAM-SNIF-REST-005/assets/actividades-hu-ideam-snif-rest-086.png)
