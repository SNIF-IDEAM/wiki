# Épica 18: Gestión y edición de geometrías de áreas restauradas

## 1. Descripción general

Esta épica define la gestión y edición de las geometrías de áreas restauradas, permitiendo a los usuarios con perfil Registrador modificar la delimitación espacial de dichas áreas directamente desde el catálogo del sistema, utilizando el visor geográfico como herramienta principal de edición.

La funcionalidad garantiza que la información espacial pueda ser corregida o actualizada de manera controlada, asegurando la integridad geométrica, el control de estados, la trazabilidad de cambios y la coherencia con los procesos automáticos de cálculo de áreas y traslapes, fortaleciendo así la calidad y confiabilidad de la información geográfica del sistema.

## 2. Objetivo

Disponer de un módulo que permita la edición controlada de la geometría de las áreas restauradas, asegurando:

- Corrección de errores de delimitación espacial.
- Actualización de geometrías conforme a nuevos insumos técnicos.
- Recalculo automático de áreas y traslapes.
- Consistencia entre geometría, atributos asociados y procesos analíticos.
- Registro histórico de modificaciones geométricas.

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-178** Editar geometría de un área restaurada desde el catálogo](/content/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-178.md)
- [**HU-IDEAM-SNIF-REST-179:** Guardar cambios de geometría editada](/content/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-179.md)
- [**HU-IDEAM-SNIF-REST-180:** Validaciones geométricas en edición](/content/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-180.md)

## 4. Riesgos

- Edición incorrecta de la geometría que genere errores espaciales.
- Inconsistencia entre geometría y atributos del área restaurada.
- Pérdida de información por falta de control de versiones.
- Errores en el cálculo de áreas y traslapes.
- Uso de geometrías no validadas en procesos analíticos.
- Modificaciones no autorizadas por perfiles incorrectos.

## 5. Diagrama de secuencia

![IMAGEN DIAGRAMA DE SECUENCIA](/content/historias_usuario/EP-IDEAM-SNIF-REST-018/assets/secuencia-ep-ideam-snif-rest-018.png)

## 6. Wireframes / mockups