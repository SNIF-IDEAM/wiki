# HU-IDEAM-SNIF-REST-030

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-030\
> **Nombre Historia de Usuario:** Trazabilidad de accesos y contexto inicial

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** registrar todas las acciones del flujo de acceso.\
> **Para:** garantizar trazabilidad institucional.

## CRITERIOS DE ACEPTACIÓN

1. **Eventos auditados del flujo de acceso**  
   1.1 El sistema debe registrar los siguientes eventos:  
   - **Inicio de sesión:** Usuario autenticado vía Keycloak.  
   - **Acceso como invitado:** Ingreso sin autenticación.  
   - **Aceptación de términos:** Registro de aceptación de términos y condiciones.  
   - **Selección de módulo:** Módulo o aplicación seleccionada por el usuario.  
   - **Cierre de sesión:** Finalización de sesión (manual o automática).  
   - **Errores de autenticación o autorización:** Intentos fallidos o accesos no autorizados.

2. **Información registrada en auditoría**  
   2.1 Cada evento debe incluir:  
   - Identificación del usuario o sesión (invitado).  
   - Fecha y hora exacta del evento.  
   - Tipo de evento.  
   - Resultado de la operación (éxito/fallo).  
   - Información de contexto relevante (IP, navegador, etc.).

3. **Persistencia de registros**  
   3.1 Los registros de auditoría deben ser persistentes e inmutables.  
   3.2 Los registros deben mantenerse según política de retención institucional.

4. **Consulta de auditoría**  
   4.1 Los administradores pueden consultar registros de auditoría.  
   4.2 Los registros deben ser exportables para análisis.

5. **Seguridad de los registros**  
   5.1 Los registros de auditoría no pueden ser modificados o eliminados por usuarios.  
   5.2 El acceso a registros de auditoría está restringido a perfiles autorizados.

## ROLES

- **Sistema:** Responsable de generar y almacenar registros de auditoría.

- **Administrador IDEAM:** Puede consultar y exportar registros de auditoría.

- **Todos los usuarios:** Sus acciones son auditadas automáticamente.

## RESTRICCIONES Y LÍMITES

- Los registros de auditoría son inmutables una vez creados.
- El almacenamiento de auditoría debe cumplir con normativa de protección de datos.
- Los registros deben mantenerse por tiempo definido según política institucional.
- El acceso a información sensible en registros debe estar protegido.
- El sistema de auditoría no debe afectar el rendimiento de operaciones críticas.

