# Épica 19: Cargue y gestión de archivos geográficos para áreas restauradas

## 1. Descripción general

Esta épica define la funcionalidad de cargue, creación y gestión de geometrías de áreas restauradas mediante el uso de archivos geográficos estándar o el dibujo manual en el visor geográfico, permitiendo a los usuarios con perfil Registrador incorporar, actualizar y mantener información espacial de manera confiable y controlada.

El sistema debe soportar múltiples formatos espaciales, realizar validaciones técnicas y funcionales sobre las geometrías cargadas o dibujadas, permitir la selección y confirmación de uno o varios polígonos, y garantizar la integridad espacial, la trazabilidad de los cambios y la consistencia de las métricas espaciales asociadas (área, traslapes, área efectiva).

La épica contempla escenarios de creación inicial, actualización parcial y reemplazo total de geometrías, integrándose con los flujos de estado del área restaurada y los mecanismos de auditoría del sistema.

## 2. Objetivo

Garantizar que las geometrías de las áreas restauradas puedan ser incorporadas, actualizadas y mantenidas en el sistema de forma confiable, controlada y trazable, permitiendo a los usuarios con perfil Registrador:

- Cargar polígonos desde archivos geográficos estándar (SHP, GeoJSON, KML).
- Dibujar geometrías manualmente cuando no existan insumos externos.
- Validar automáticamente la calidad técnica y de negocio de las geometrías.
- Seleccionar y confirmar uno o varios polígonos para conformar áreas simples o multipolígonos.
- Reemplazar geometrías existentes de manera segura y controlada.
- Mantener actualizadas las métricas espaciales (área, traslapes, área efectiva).
- Asegurar la trazabilidad completa de todas las modificaciones geométricas.

Con ello, el sistema fortalece la calidad de los datos espaciales, la consistencia de la información territorial y la confiabilidad de los análisis y reportes derivados de las áreas restauradas.

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-201:** Cargar geometría desde archivo geográfico](/historias_usuario/EP-IDEAM-SNIF-REST-019/HU-IDEAM-SNIF-REST-201.md)
- [**HU-IDEAM-SNIF-REST-202:** Validaciones del archivo geográfico cargado](/historias_usuario/EP-IDEAM-SNIF-REST-019/HU-IDEAM-SNIF-REST-202.md)
- [**HU-IDEAM-SNIF-REST-203:** Seleccionar y confirmar geometrías del archivo cargado](/historias_usuario/EP-IDEAM-SNIF-REST-019/HU-IDEAM-SNIF-REST-203.md)
- [**HU-IDEAM-SNIF-REST-204:** Reemplazar geometría existente mediante cargue de archivo](/historias_usuario/EP-IDEAM-SNIF-REST-019/HU-IDEAM-SNIF-REST-204.md)
- [**HU-IDEAM-SNIF-REST-205:** Recalcular métricas espaciales automáticamente](/historias_usuario/EP-IDEAM-SNIF-REST-019/HU-IDEAM-SNIF-REST-205.md)
- [**HU-IDEAM-SNIF-REST-206:** Registrar auditoría de edición geométrica](/historias_usuario/EP-IDEAM-SNIF-REST-019/HU-IDEAM-SNIF-REST-206.md)

## 4. Riesgos

- Cargue de archivos con geometrías inválidas o corruptas.
- Uso de sistemas de referencia espacial incorrectos.
- Selección errónea de polígonos desde archivos con múltiples geometrías.
- Reemplazo accidental de geometrías válidas sin control.
- Inconsistencias entre geometría, métricas espaciales y estado del área restaurada.
- Pérdida de trazabilidad de modificaciones geométricas.
- Uso de geometrías no validadas en procesos analíticos posteriores.

## 5. Diagrama de secuencia

![IMAGEN DIAGRAMA DE SECUENCIA](/historias_usuario/EP-IDEAM-SNIF-REST-019/assets/secuencia-ep-ideam-snif-rest-019.png)

## 6. Wireframes / mockups
