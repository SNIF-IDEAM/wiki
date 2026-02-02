# Épica 20: Administración de catálogos taxonómicos

## 1. Descripción general

Esta épica define la administración de los catálogos taxonómicos, los cuales permiten la clasificación jerárquica de las especies que posteriormente serán utilizadas en los procesos de caracterización de áreas restauradas dentro del sistema.

La gestión de estos catálogos es exclusiva de perfiles administradores, garantizando la integridad, consistencia y trazabilidad de la información taxonómica.
La estructura jerárquica contempla los niveles de Reino, Filum, Familia, Género y Especie, asegurando relaciones coherentes entre los distintos niveles y su correcta reutilización en los módulos operativos del sistema.

Todos los catálogos comparten reglas comunes de estado, auditoría, restricción de eliminación física y control de vigencias, fortaleciendo la confiabilidad de la información biológica del sistema.

## 2. Objetivo

Disponer de un módulo administrativo que permita crear, consultar, actualizar, activar e inactivar los catálogos taxonómicos, asegurando:

- La correcta definición de la jerarquía taxonómica.
- La integridad referencial entre los distintos niveles (Reino → Especie).
- La disponibilidad controlada de especies para su uso en la caracterización de áreas restauradas.
- La trazabilidad completa de los cambios realizados.
- La preservación histórica de la información mediante inactivación lógica.

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-190:** Administrar reinos biológicos](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-190.md)
- [**HU-IDEAM-SNIF-REST-191:** Administrar filum](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-191.md)
- [**HU-IDEAM-SNIF-REST-192:** Administrar familias](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-192.md)
- [**HU-IDEAM-SNIF-REST-193:** Administrar géneros](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-193.md)
- [**HU-IDEAM-SNIF-REST-194:** Administrar especies](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-194.md)
- [**HU-IDEAM-SNIF-REST-195:** Control de dependencias taxonómicas](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-195.md)
- [**HU-IDEAM-SNIF-REST-196:** Uso de especies en áreas restauradas](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-196.md)
- [**HU-IDEAM-SNIF-REST-197:** Auditoría de catálogos taxonómicos](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-197.md)
- [**HU-IDEAM-SNIF-REST-198:** Visualización jerárquica del catálogo](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-198.md)
- [**HU-IDEAM-SNIF-REST-199:** Búsqueda avanzada de especies](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-199.md)

## 4. Riesgos

- Registro incorrecto de la jerarquía taxonómica.
- Inconsistencias entre niveles (por ejemplo, especies sin género).
- Uso de registros inactivos en procesos operativos.
- Duplicidad de registros taxonómicos.
- Pérdida de trazabilidad de modificaciones.
- Eliminación accidental de información crítica.

## 5. Diagrama de secuencia

![IMAGEN DIAGRAMA DE SECUENCIA](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/assets/secuencia-ep-ideam-snif-rest-020.png)

## 6. Wireframes / mockupso