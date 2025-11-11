## HU-IDEAM-SNIF-REST-133
> **Identificador Historia de Usuario:** HU-IDEAM-SNIF-REST-133 \
> **Nombre Historia de Usuario:** Módulo de restauración - Creación de Registro de Especie (Campos y Validaciones)

> **Área Proyecto:** Subdirección de Ecosistemas e Información Ambiental \
> **Nombre proyecto:** Realizar la construcción temática, mejoras informáticas y optimización del Módulo de restauración del SNIF del IDEAM. \
> **Líder funcional:** Wilmer Espitia Muñoz\
> **Analista de requerimiento de TI:** Sergio Alonso Anaya Estévez

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** Técnico de Campo o Administrador del Proyecto. \
> **Quiero:** ingresar los datos detallados de una especie vegetal o faunística asociada a una Área de Restauración específica, incluyendo su procedencia, técnica de restauración y área intervenida. \
> **Para:** documentar la trazabilidad ecológica de los insumos biológicos y los métodos aplicados en el proceso de restauración.

## CRITERIOS DE ACEPTACIÓN

1. **Activación y Creación de Detalle (Especies)**  
    1.1 Dado que el usuario accede al formulario de Gestión de Áreas Restauradas, cuando el Área ya existe y posee un id_area_restaurada válido, entonces el sistema debe habilitar la pestaña/sección "Gestión de Especies".  
    1.2 Dado que el usuario selecciona la pestaña "Gestión de Especies", cuando crea un nuevo registro de especie, entonces el sistema debe mostrar los siguientes campos obligatorios para la captura de datos: 
    - Especie.
    - ¿Es nativa?
    - Procedencia de la especie.
    - Área asociada (ha).
    - Técnica de restauración.

2. **Validaciones de Campos y Datos**  
    2.1 Dado que el usuario ingresa el campo Especie, cuando intenta guardar, entonces el sistema debe validar que sea obligatorio, tenga entre 5 y 200 caracteres, y no sea únicamente espacios (RN6). El campo debe permitir autocompletado con la especie_catalogo o la entrada libre.  

    2.2 Dado que el usuario selecciona el campo ¿Es nativa?, cuando completa el formulario, entonces el sistema debe exigir una opción obligatoria de tipo enum con los valores posibles: SÍ, NO, o DESCONOCIDO.  

    2.3 Dado que el usuario selecciona el campo Procedencia de la especie, cuando intenta guardar, entonces el sistema debe validar que el valor seleccionado (FK) exista en la tabla dom_procedencia_especie (RN2). 

    2.4 Dado que el usuario selecciona el campo Técnica de restauración, cuando intenta guardar, entonces el sistema debe validar que el valor seleccionado (FK) exista en la tabla dom_tecnica_restauracion (RN3).


## DIAGRAMA DE SECUENCIA

![IMAGEN DIAGRAMA DE SECUENCIA](assets/secuencia-HU-IDEAM-SNIF-REST-133.png)

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN DIAGRAMA DE FLUJO DEL PROCESO](assets/actividades-HU-IDEAM-SNIF-REST-133.png)

## PROTOTIPO PRELIMINAR

![PROTOTIPO PRELIMINAR](assets/wireframe-hu-ideam-snif-rest-133.png)


## ANEXOS

- Wireframe: Creación de Registro de Especie (Campos y Validaciones)
- HU-IDEAM-SNIF-REST-134 (Gestión de Listado y Aprobación de Especies)
- Documento de dominios (dom_procedencia_especie, dom_tecnica_restauracion).
- Mapeo de errores de validación a mensajes específicos.
