# Épica 17: Administración de áreas de restauración

## 1. Descripción general

Esta épica define la administración integral de las áreas de restauración, desde su creación y asociación a proyectos, pasando por su caracterización técnica, social y ambiental, hasta su visualización, seguimiento y control espacial dentro del sistema.

La épica centraliza todas las funcionalidades necesarias para gestionar el ciclo de vida completo de un área restaurada, incluyendo el registro de información general, la gestión de geometrías, la asociación de catálogos temáticos, el seguimiento temporal, el cálculo y visualización de traslapes espaciales, y la consulta estructurada de la información por diferentes perfiles de usuario.

Asimismo, garantiza que la información de las áreas restauradas sea consistente, trazable, auditable y validada, integrándose con los procesos de validación IDEAM, los controles de estado (borrador, validado, etc.) y los análisis espaciales requeridos para la toma de decisiones, el seguimiento de políticas públicas y la generación de reportes.

Esta épica constituye el núcleo funcional del módulo de restauración, asegurando la calidad de los datos, la coherencia territorial y la confiabilidad de los análisis derivados de las áreas de restauración registradas en el sistema.

## 2. Objetivo

Disponer de un conjunto de funcionalidades que permitan crear, administrar, consultar, caracterizar y dar seguimiento a las áreas de restauración asociadas a proyectos, garantizando:

- La correcta asociación de áreas restauradas a proyectos.
- La gestión controlada del ciclo de vida del área restaurada.
- La captura estructurada de información técnica, social, ambiental y administrativa.
- La definición, validación y actualización de geometrías.
- El análisis espacial automático, incluyendo la identificación y gestión de traslapes.
- La consulta integral de la información por diferentes perfiles.
- La trazabilidad completa de los cambios realizados.

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-160:** Ver áreas restauradas](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-160.md)
- [**HU-IDEAM-SNIF-REST-161:** Crear nueva área restaurada desde el proyecto](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-161.md)
- [**HU-IDEAM-SNIF-REST-162:** Cargar y gestionar geometría del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-162.md)
- [**HU-IDEAM-SNIF-REST-163:** Diligenciar información general del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-163.md)
- [**HU-IDEAM-SNIF-REST-164:** Gestionar Agenda Política del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-164.md)
- [**HU-IDEAM-SNIF-REST-165:** Consultar límite espacial del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-165.md)
- [**HU-IDEAM-SNIF-REST-166:** Gestionar parámetros del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-166.md)
- [**HU-IDEAM-SNIF-REST-167:** Gestionar indicadores del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-167.md)
- [**HU-IDEAM-SNIF-REST-168:** Registrar seguimientos del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-168.md)
- [**HU-IDEAM-SNIF-REST-169:** Gestión de catálogos asociados](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-169.md)
- [**HU-IDEAM-SNIF-REST-170:** Validar completitud e integridad del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-170.md)
- [**HU-IDEAM-SNIF-REST-171:** Registrar auditoría de cambios](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-171.md)
- [**HU-IDEAM-SNIF-REST-172:** Identificar traslapes espaciales del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-172.md)
- [**HU-IDEAM-SNIF-REST-173:** Visualizar listado de traslapes del área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-173.md)
- [**HU-IDEAM-SNIF-REST-174:** Visualizar geometría de traslape en el visor geográfico](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-174.md)
- [**HU-IDEAM-SNIF-REST-175:** Asociar traslapes al área restaurada](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-175.md)
- [**HU-IDEAM-SNIF-REST-176:** Validar impacto de traslapes en el proceso de creación](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-176.md)
- [**HU-IDEAM-SNIF-REST-177:** Registrar auditoría del cálculo de traslapes](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/HU-IDEAM-SNIF-REST-177.md)

## 4. Riesgos

- Edición incorrecta de la geometría que genere errores espaciales.
- Inconsistencia entre geometría y atributos del área restaurada.
- Pérdida de información por falta de control de versiones.
- Errores en el cálculo de áreas y traslapes.
- Uso de geometrías no validadas en procesos analíticos.
- Modificaciones no autorizadas por perfiles incorrectos.

## 5. Diagrama de secuencia

![IMAGEN DIAGRAMA DE SECUENCIA](/content/historias_usuario/EP-IDEAM-SNIF-REST-017/assets/secuencia-ep-ideam-snif-rest-017.png)

## 6. Wireframes / mockups