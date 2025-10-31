## HU-IDEAM-SNIF-REST-030

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-030 \
> **Nombre Historia de Usuario:** Módulo de restauración - Captura y validación de geometría

> **Área Proyecto:** Subdirección de Ecosistemas e Información Ambiental \
> **Nombre proyecto:** Realizar la construcción temática, mejoras informáticas y optimización del Módulo de restauración del SNIF del IDEAM. \
> **Líder funcional:** Wilmer Espitia Muñoz\
> **Analista de requerimiento de TI:** Sergio Alonso Anaya Estévez

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario solicitante. \
> **Quiero:** dibujar una geometría directamente sobre el mapa y que el sistema valide su forma. \
> **Para:** garantizar que la consulta espacial se realice con una geometría válida.

## CRITERIOS DE ACEPTACIÓN

1. **Representación visual en el mapa**  
    1.1 Dado que el usuario tiene activo el modo de dibujo, cuando realiza una geometría en el mapa, entonces el sistema debe representar la figura con un estilo destacado (línea o relleno visible).  


2. **Validación de geometría**  
    2.1 Dado que el dibujo se completó, cuando el sistema evalúa la geometría, entonces debe validar que no esté vacía ni sea inválida (sin vértices o con coordenadas erróneas).


3. **Notificación de error**  
    3.1 Dado que la geometría no es válida, cuando el sistema detecte el error, entonces debe mostrar un mensaje informativo al usuario y solicitar que repita el dibujo.


   
## DIAGRAMA DE SECUENCIA

![IMAGEN DIAGRAMA DE SECUENCIA](assets/secuencia-hu-ideam-snif-rest-030.png)

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN DIAGRAMA DE FLUJO DEL PROCESO](assets/actividades-hu-ideam-snif-rest-030.png)

## PROTOTIPO PRELIMINAR

![PROTOTIPO PRELIMINAR](assets/wireframe-hu-ideam-snif-rest-030.png)

## ANEXOS
