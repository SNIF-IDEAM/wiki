# Épica: Gobernanza y Administración de Catálogos Taxonómicos

## 1. Descripción general

Esta épica define la gobernanza y administración de los catálogos taxonómicos, los cuales constituyen la base semántica y científica oficial para la clasificación biológica de las especies utilizadas en la caracterización de las áreas restauradas dentro del sistema.

La administración de los catálogos es exclusiva del perfil Administrador IDEAM, garantizando:

- Consistencia científica de la información biológica.
- Trazabilidad histórica de los cambios taxonómicos.
- Estabilidad de los datos utilizados en reportes oficiales.

Los catálogos taxonómicos son consumidos de forma transversal por los módulos de:

- Áreas restauradas.
- Seguimiento y monitoreo.
- Indicadores ecológicos.
- Reportes nacional e internacional.

La jerarquía taxonómica definida en el sistema es estricta y obligatoria (Reino, Filum, Familia, Género y Especie), y todos los registros cuentan con control de estado, auditoría completa y prohibición de borrado físico.

## 2. Objetivo

Disponer de un módulo administrativo que permita la gestión centralizada, controlada y auditada de los catálogos taxonómicos oficiales, asegurando:

- La correcta administración de la jerarquía taxonómica definida por el sistema.
- La integridad y coherencia científica de los registros biológicos.
- La inmutabilidad de la jerarquía una vez existan dependencias asociadas.
- La disponibilidad de especies activas para su uso en los módulos operativos.
- La preservación histórica de la información taxonómica utilizada en procesos y reportes oficiales.

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-207:** Administrar reinos biológicos](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-207.md)
- [**HU-IDEAM-SNIF-REST-208:** Administrar filum](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-208.md)
- [**HU-IDEAM-SNIF-REST-209:** Administrar familias](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-209.md)
- [**HU-IDEAM-SNIF-REST-210:** Administrar géneros](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-210.md)
- [**HU-IDEAM-SNIF-REST-211:** Administrar especies](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-211.md)
- [**HU-IDEAM-SNIF-REST-212:** Control de dependencias taxonómicas](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-212.md)
- [**HU-IDEAM-SNIF-REST-213:** Uso de especies en áreas restauradas](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-213.md)
- [**HU-IDEAM-SNIF-REST-214:** Auditoría de catálogos taxonómicos](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-214.md)
- [**HU-IDEAM-SNIF-REST-215:** Visualización jerárquica del catálogo](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-215.md)
- [**HU-IDEAM-SNIF-REST-216:** Búsqueda avanzada de especies](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/HU-IDEAM-SNIF-REST-216.md)

## 4. Riesgos

- Inconsistencias científicas por edición no controlada de catálogos.
- Alteración indebida de jerarquías con dependencias activas.
- Uso de especies inactivas en formularios operativos.
- Pérdida de trazabilidad de cambios taxonómicos.

## 5. Diagrama de secuencia

![IMAGEN DIAGRAMA DE SECUENCIA](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/assets/secuencia-ep-ideam-snif-rest-020.png)

## 6. Wireframes / mockupso