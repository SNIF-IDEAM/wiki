# Épica: Gestión y actualización de geometrías de áreas restauradas

## 1. Descripción general

Esta épica define la gestión y actualización controlada de la geometría de las áreas restauradas dentro del sistema SNIF, permitiendo a los usuarios con perfil Registrador modificar la delimitación espacial de un área restaurada exclusivamente mediante la carga de un nuevo archivo geográfico.

El sistema dispone de un visor geográfico simplificado, orientado únicamente a la visualización y navegación espacial (zoom, encuadre, activación y desactivación de capas), sin permitir edición gráfica directa sobre el mapa.

Esta épica garantiza:

- Control institucional de la información espacial.
- Trazabilidad completa de las modificaciones geométricas.
- Recalculo automático de métricas espaciales.
- Identificación de traslapes.
- Coherencia entre geometría, atributos, visor geográfico y reportes oficiales.

La gestión de geometrías se concibe como un proceso técnico, auditado y alineado con los lineamientos del IDEAM.

## 2. Objetivo

Disponer de un módulo que permita la actualización controlada, validada y auditada de la geometría de un área restaurada, con el fin de:

- Corregir errores de delimitación detectados con posterioridad al registro.
- Actualizar la geometría a partir de insumos técnicos oficiales más precisos.
- Mantener la consistencia entre:
- Geometría almacenada.
- Área calculada automáticamente.
- Traslapes espaciales.
- Información publicada, consultada y reportada por el sistema.
- Garantizar que cada modificación genere cambios de estado, recálculos automáticos y registros de auditoría.

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-195:** Actualizar geometría de un área restaurada mediante archivo](/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-195)
- [**HU-IDEAM-SNIF-REST-196:** Confirmar o cancelar actualización de geometría](/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-196)
- [**HU-IDEAM-SNIF-REST-197:** Validaciones geométricas en carga de archivo](/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-197)
- [**HU-IDEAM-SNIF-REST-198:** Recalcular áreas y traslapes tras actualización geométrica](/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-198)
- [**HU-IDEAM-SNIF-REST-199:** Registrar auditoría de cambios geométricos](/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-199)
- [**HU-IDEAM-SNIF-REST-200:** Visualizar geometría actualizada en visor geográfico](/historias_usuario/EP-IDEAM-SNIF-REST-018/HU-IDEAM-SNIF-REST-200)

## 4. Riesgos

- Carga de archivos geográficos con errores técnicos o proyección incorrecta.
- Inconsistencias entre geometría actualizada y métricas espaciales publicadas.
- Uso de geometrías desactualizadas en reportes o visualizaciones.
- Pérdida de trazabilidad de cambios geométricos.
- Edición no autorizada de geometría fuera del flujo institucional.
- Falta de sincronización entre el visor, la base de datos espacial y los módulos de reporte.

## 5. Diagrama de secuencia

![IMAGEN DIAGRAMA DE SECUENCIA](/historias_usuario/EP-IDEAM-SNIF-REST-018/assets/secuencia-ep-ideam-snif-rest-018.png)

## 6. Wireframes / mockups
