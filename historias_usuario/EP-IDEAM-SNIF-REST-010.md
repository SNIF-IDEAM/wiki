# Épica 010: Descarga de Capas Geográficas

## 1. Descripción general

Esta épica define la funcionalidad de descarga de capas geográficas del módulo de restauración del Sistema Nacional de Información Forestal (SNIF). La funcionalidad permite a los usuarios autorizados exportar información geográfica institucional desde distintos contextos del sistema (catálogo de capas, resultados de consultas y visor geográfico).

La descarga constituye una operación de lectura derivada que no modifica ni persiste datos en el sistema, ejecutándose bajo controles estrictos de volumen, formato, geometría, sistema de referencia espacial y permisos por rol. Todos los datos exportados deben ser exactos, interoperables, seguros, trazables y consistentes con la información visualizada, sin comprometer el desempeño ni la integridad de la base geoespacial.

El sistema garantiza que los datos descargados correspondan exactamente a los elementos seleccionados, visualizados o consultados por el usuario, manteniendo integridad referencial entre mapa, datos y formularios.

---

## 2. Objetivo

Proporcionar un **mecanismo de descarga seguro, controlado y trazable** de información geográfica que permita a los usuarios del módulo de restauración exportar datos en formatos geoespaciales estándar, garantizando:

- Descarga desde múltiples contextos (catálogo, consultas, visor).
- Exportación en formatos geoespaciales estándar (Shapefile, GeoJSON, KML, GeoPackage).
- Validación de geometrías y atributos antes de la exportación.
- Control de volumen y límites de descarga.
- Reproyección obligatoria a EPSG:4326.
- Control de acceso por roles y permisos.
- Auditoría completa de todas las descargas.
- Integridad referencial entre datos visualizados y datos descargados.

---

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-129:** Descargar capas desde el catálogo](/historias_usuario/EP-IDEAM-SNIF-REST-010/HU-IDEAM-SNIF-REST-129.md)
- [**HU-IDEAM-SNIF-REST-130:** Descargar resultados de consultas atributivas](/historias_usuario/EP-IDEAM-SNIF-REST-010/HU-IDEAM-SNIF-REST-130.md)
- [**HU-IDEAM-SNIF-REST-131:** Descargar resultados de consultas espaciales](/historias_usuario/EP-IDEAM-SNIF-REST-010/HU-IDEAM-SNIF-REST-131.md)
- [**HU-IDEAM-SNIF-REST-132:** Seleccionar formato de descarga](/historias_usuario/EP-IDEAM-SNIF-REST-010/HU-IDEAM-SNIF-REST-132.md)
- [**HU-IDEAM-SNIF-REST-133:** Registrar descargas para auditoría](/historias_usuario/EP-IDEAM-SNIF-REST-010/HU-IDEAM-SNIF-REST-133.md)

---

## 4. Riesgos

- Descarga de volúmenes excesivos que comprometan el desempeño del sistema.
- Inconsistencia entre datos visualizados y datos descargados.
- Descarga de datos no autorizados por rol o permisos.
- Geometrías inválidas o corruptas en los archivos exportados.
- Falta de información de sistema de referencia espacial (CRS) en archivos descargados.
- Pérdida de información en conversiones de formato (ej. truncamiento de nombres en Shapefile).
- Falta de trazabilidad sobre quién descargó qué información y cuándo.
- Descarga simultánea excesiva que sature recursos del servidor.

---

## 5. Alcance funcional

### Contextos de descarga
- Descarga de capas completas desde el catálogo de capas
- Descarga de subconjuntos desde consultas atributivas
- Descarga de subconjuntos desde consultas espaciales (dibujo, coordenadas, capa externa)
- Descarga iniciada desde el visor geográfico basada en selección o vista activa

### Formatos de salida
- Shapefile (.shp + archivos complementarios en .zip)
- GeoJSON (.geojson)
- KML (.kml)
- GeoPackage (.gpkg)

### Validaciones y controles
- Verificación de geometrías válidas
- Exclusión de registros con geometrías vacías o nulas
- Validación de compatibilidad formato–geometría
- Truncamiento automático de nombres de campo para Shapefile (máx. 10 caracteres)
- Inclusión obligatoria de información de CRS (EPSG:4326)
- Límite máximo de descarga (10.000 registros o 10 MB)
- Reproyección obligatoria a EPSG:4326

### Integridad referencial
- Los datos descargados corresponden exactamente a:
  - Elementos seleccionados en el mapa
  - Registros visibles en tabla de resultados
  - Contexto de consulta o capa desde donde se inicia la descarga
- No se permite descargar información distinta a la visualizada o filtrada

---

## 6. Control por roles

| Rol | Alcance de descarga |
|-----|---------------------|
| **Administrador IDEAM** | Descarga completa sin restricciones adicionales |
| **Registrador** | Descarga con restricciones según política institucional |
| **Consulta** | Descarga con restricciones según política institucional |

**Restricciones aplicables:**
- Límites de volumen por rol
- Restricciones de atributos exportados según formato
- Capas con permisos específicos de descarga
- Usuarios sin permisos no visualizan la opción de descarga

---

## 7. Auditoría y trazabilidad

Toda descarga se registra obligatoriamente en REGISTROS DEL SISTEMA incluyendo:

- **Identificador único de transacción:** UUID del evento de descarga
- **Usuario:** Identificación completa del usuario
- **Fecha y hora:** Timestamp de inicio y finalización
- **Capa descargada:** Identificador y nombre
- **Origen:** Catálogo, consulta atributiva, consulta espacial, o visor
- **Tipo de consulta asociada:** Especificación del contexto de consulta
- **Formato de salida:** Formato seleccionado (Shapefile, GeoJSON, KML, GeoPackage)
- **Cantidad de registros:** Número exacto de registros exportados
- **Tamaño del archivo:** En bytes
- **CRS origen y destino:** Sistemas de referencia espacial
- **Estado de la operación:** Éxito, error o cancelado
- **Rol del usuario:** Perfil con el que se ejecutó la descarga

---

## 8. UX esperado

- **Selección de formato:** Modal o menú desplegable claro con opciones de formato
- **Botón único y visible:** "Descargar datos" consistente en todos los puntos del sistema
- **Mensajes claros de retroalimentación:**
  - Éxito de descarga
  - Error con descripción
  - Exceso de límites con información del motivo
  - Incompatibilidad de formato
- **Proceso sencillo y predecible:** Mínimos pasos necesarios para completar la descarga
- **Coherencia:** Experiencia consistente desde catálogo, consultas y visor

---

## 9. Validaciones funcionales transversales

**Formato permitido:**
- Validar compatibilidad formato–geometría
- Truncar nombres de campo para Shapefile (máx. 10 caracteres)
- Incluir metadatos obligatorios según formato
- Para KML: exportar solo atributos esenciales

**Geometrías válidas:**
- Verificar geometrías válidas según estándar OGC
- Excluir registros con geometrías vacías o nulas
- Informar registros excluidos al usuario

**Volumen máximo:**
- Validar límites antes de iniciar descarga (10.000 registros o 10 MB)
- Rechazar descarga si se exceden límites
- Proporcionar mensaje informativo con motivo del rechazo

**Reproyección:**
- Reproyectar obligatoriamente a EPSG:4326
- Incluir información completa de CRS en todos los archivos
- Mantener integridad geométrica durante reproyección

---

## 10. Validaciones de negocio transversales

**Control de permisos:**
- Validar rol del usuario antes de habilitar descarga
- Aplicar restricciones específicas según rol
- Validar acceso a la capa o datos específicos
- Registrar intentos de acceso no autorizado

**Integridad de datos:**
- Garantizar correspondencia exacta entre visualización y descarga
- Incluir información completa de CRS
- Validar que los datos descargados sean coherentes con el contexto (mapa, tabla, consulta)

**Auditoría obligatoria:**
- Registrar cada evento de descarga sin excepciones
- Incluir información completa de trazabilidad
- Garantizar persistencia de registros
- Permitir consulta por administradores

---

## 11. Diagrama de secuencia

_Pendiente de generación_

---

## 12. Wireframes / mockups

_Pendiente de generación_
