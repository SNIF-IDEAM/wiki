# HU-IDEAM-SNIF-REST-036

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-036\
> **Nombre Historia de Usuario:** Crear un nuevo registro en tabla de dominio (_dom)

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema.\
> **Quiero:** crear un nuevo valor de dominio en una tabla _dom.\
> **Para:** habilitar su uso controlado y estandarizado dentro del módulo de restauración del SNIF.

## CRITERIOS DE ACEPTACIÓN

1. **Acceso a la funcionalidad de creación**  
   1.1 El sistema debe habilitar la opción de crear un nuevo registro únicamente para usuarios con rol Administrador IDEAM.  
   1.2 La opción debe estar disponible desde la vista de administración de una tabla _dom específica.

2. **Campos obligatorios del registro**  
   2.1 El formulario de creación debe incluir como mínimo los siguientes campos:  
   - Código del valor (obligatorio).  
   - Descripción del valor (obligatoria).  
   - Estado del registro.  
   - Fecha de vigencia, cuando aplique.  

3. **Validaciones sobre el código**  
   3.1 El código del valor debe ser obligatorio y único por tabla de dominio.  
   3.2 El código no debe ser editable una vez creado el registro.  
   3.3 El sistema no debe permitir el uso de códigos reservados del sistema.

4. **Validaciones sobre la descripción**  
   4.1 La descripción del valor debe ser obligatoria.  
   4.2 La longitud máxima de la descripción debe estar definida por la configuración de cada tabla _dom.  
   4.3 El sistema no debe permitir la creación de duplicados lógicos (código y descripción equivalentes).

5. **Estado y vigencia del registro**  
   5.1 El nuevo registro debe crearse con estado **Activo** por defecto.  
   5.2 Cuando se diligencien fechas de vigencia, el sistema debe validar que la fecha de inicio sea menor o igual a la fecha de fin.

6. **Confirmación de creación**  
   6.1 El nuevo valor de dominio no debe estar disponible para su uso en formularios hasta que el registro sea guardado y confirmado exitosamente.  

## ROLES

- **Administrador IDEAM:**  Puede crear nuevos registros en las tablas de dominio (_dom) conforme a las reglas de negocio del sistema.

- **Registrador:**  No puede crear nuevos valores de dominio. Consume los valores de dominio únicamente a través de los formularios de aplicación.

- **Usuario Consulta:**  No puede crear nuevos valores de dominio. Consulta los valores de dominio activos desde las opciones de visualización de información validada.

## RESTRICCIONES Y LÍMITES

- No se permite la creación de registros con códigos reservados del sistema.
- No se permite la creación de registros duplicados lógica o semánticamente.
- El código del valor no puede modificarse una vez creado.
- El acceso a esta funcionalidad está restringido por rol.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-036.png)(historias_usuario/EP-IDEAM-SNIF-REST-002/assets/actividades-hu-ideam-snif-rest-036.png)
