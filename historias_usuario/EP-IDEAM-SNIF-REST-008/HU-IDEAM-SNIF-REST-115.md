# HU-IDEAM-SNIF-REST-115

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-115\
> **Nombre Historia de Usuario:** Modal de rechazo con motivo obligatorio

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – Sistema de Validación IDEAM\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** Validador IDEAM.\
> **Quiero:** especificar claramente el motivo por el cual rechazo un proyecto o un área de restauración.\
> **Para:** que la entidad responsable sepa exactamente qué debe corregir antes de reenviar la información.

## CRITERIOS DE ACEPTACIÓN

1. **Apertura del modal de rechazo**  
   1.1 El sistema debe mostrar un modal de rechazo al hacer clic en la acción **“Rechazar”** sobre un proyecto o un área.  
   1.2 El modal debe bloquear la interacción con la vista principal mientras esté activo.

2. **Campos del formulario de rechazo**  
   2.1 El modal debe incluir los siguientes campos:
   - **Motivo del rechazo** (textarea, obligatorio)  
   - **Observaciones técnicas adicionales** (textarea, opcional)  
   - **Categoría del problema** (select obligatorio) con las opciones:
     - Datos incompletos  
     - Inconsistencia técnica  
     - Documentación faltante  
     - Coordenadas incorrectas  
     - Otro  
   2.2 Cuando la categoría seleccionada sea **“Otro”**, el sistema debe habilitar un campo adicional de especificación obligatorio.

3. **Validaciones del campo motivo**  
   3.1 El campo **Motivo del rechazo** debe ser obligatorio.  
   3.2 El motivo debe tener un mínimo de:
   - **20 caracteres** cuando el rechazo sea de un proyecto.  
   - **15 caracteres** cuando el rechazo sea de un área.  
   3.3 El motivo no debe superar los **1000 caracteres**.  
   3.4 El sistema no debe permitir motivos compuestos únicamente por espacios en blanco.

4. **Validaciones de observaciones técnicas**  
   4.1 El campo **Observaciones técnicas adicionales** no debe superar los **2000 caracteres**.  
   4.2 Este campo es opcional y no bloquea el envío cuando está vacío.

5. **Contador y estado de acciones**  
   5.1 El sistema debe mostrar un **contador de caracteres visible** para el campo Motivo del rechazo.  
   5.2 El botón **“Confirmar rechazo”** debe permanecer deshabilitado hasta que se cumpla el mínimo de caracteres requerido.  

6. **Acciones del modal**  
   6.1 El modal debe incluir los botones:
   - **Confirmar rechazo** (estilo destructivo, color rojo)  
   - **Cancelar**  
   6.2 Al confirmar el rechazo, el sistema debe cerrar el modal y mostrar una **confirmación visual de éxito**.  
   6.3 Al cancelar, el sistema debe cerrar el modal sin registrar cambios.

7. **Comportamiento UX verificable**  
   7.1 El modal debe mostrarse centrado en pantalla con **overlay semitransparente**.  
   7.2 Al abrir el modal, el foco debe posicionarse automáticamente en el campo **Motivo del rechazo**.  
   7.3 La tecla **ESC** debe cerrar el modal; si existe texto diligenciado, el sistema debe solicitar confirmación previa.  
   7.4 La tecla **Enter** no debe enviar el formulario para evitar envíos accidentales.  
   7.5 El sistema debe mostrar una **previsualización del mensaje** que recibirá la entidad antes de confirmar el rechazo.

8. **Control por roles**  
   8.1 Solo los roles **Validador IDEAM** y **Administrador IDEAM** pueden ejecutar la acción de rechazo.  
   8.2 El sistema debe registrar el usuario responsable del rechazo para efectos de auditoría.

9. **Auditoría del rechazo**  
   9.1 El sistema debe registrar un evento de auditoría por cada rechazo realizado.  
   9.2 El evento de auditoría debe incluir el **motivo completo del rechazo** y la categoría seleccionada.  
   9.3 El registro debe almacenarse en la tabla de validaciones asociada al proyecto o área correspondiente.

## ROLES

- **Validador IDEAM:** Rechaza proyectos y áreas indicando motivo obligatorio.  
- **Administrador IDEAM:** Rechaza proyectos y áreas y consulta auditoría.  
- **Usuario Consulta:** No tiene acceso a la funcionalidad de rechazo.

## RESTRICCIONES Y LÍMITES

- No se permite rechazar sin motivo válido.  
- No se permite rechazar por usuarios sin rol autorizado.  
- El rechazo no puede ejecutarse si las validaciones de formulario no se cumplen.  
- El motivo registrado no puede ser modificado posteriormente.

## DIAGRAMA DE FLUJO DEL PROCESO

[![IMAGEN FLUJO DE ACTIVIDADES](/historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-115.png)](/historias_usuario/EP-IDEAM-SNIF-REST-008/assets/actividades-hu-ideam-snif-rest-115.png)