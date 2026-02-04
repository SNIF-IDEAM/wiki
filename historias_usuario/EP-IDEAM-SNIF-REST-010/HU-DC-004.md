# HU-DC-004

> **Identificador Historia de Usuario:** hu-dc-004\
> **Nombre Historia de Usuario:** Seleccionar formato de descarga

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – SNIF (SIG)\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario autorizado.\
> **Quiero:** elegir el formato de salida de la descarga.\
> **Para:** garantizar compatibilidad con mis herramientas de trabajo.

## CRITERIOS DE ACEPTACIÓN

1. **Formatos geoespaciales disponibles**  
   1.1 El sistema ofrece los siguientes formatos estándar para descarga:  
   - **Shapefile (.shp):** Incluye archivos .shp, .shx, .dbf, .prj, .cpg empaquetados en .zip.  
   - **GeoJSON (.geojson):** Formato único, legible y compatible con aplicaciones web.  
   - **KML (.kml):** Optimizado para Google Earth y aplicaciones de visualización.  
   - **GeoPackage (.gpkg):** Formato único, basado en SQLite, con soporte completo de atributos y geometría.  
   1.2 Cada formato incluye automáticamente la información de CRS (EPSG:4326).

2. **Compatibilidad formato–geometría**  
   2.1 El sistema valida que el formato seleccionado sea compatible con el tipo de geometría de los datos.  
   2.2 Si hay incompatibilidad, el formato no estará disponible en el selector o se mostrará deshabilitado con tooltip explicativo.  
   2.3 Se recomienda automáticamente el formato más apropiado según el tipo de geometría.

3. **Compatibilidad formato–atributos**  
   3.1 El sistema valida que el formato seleccionado soporte el tipo y cantidad de atributos presentes en los datos.  
   3.2 Para Shapefile:  
   - Los nombres de campo se truncan automáticamente a 10 caracteres.  
   - Se muestra advertencia sobre posible pérdida de información en nombres de campo.  
   3.3 Para KML:  
   - Solo se exportan atributos esenciales.  
   - Se muestra advertencia sobre limitación de atributos.  
   3.4 GeoJSON y GeoPackage soportan todos los atributos sin restricciones.

4. **Integridad referencial del dataset**  
   4.1 El dataset descargado es idéntico en contenido, independientemente del formato seleccionado.  
   4.2 Solo varían:  
   - La estructura de almacenamiento (archivo único vs. múltiples archivos).  
   - La forma de representación de atributos (según limitaciones del formato).  
   4.3 Las geometrías y valores de atributos permanecen inalterados (salvo truncamiento de nombres en Shapefile).

5. **Control por roles**  
   5.1 Todos los usuarios autorizados pueden elegir entre los formatos disponibles.  
   5.2 Los formatos habilitados son los mismos para todos los perfiles (Administrador, Registrador, Consulta).  
   5.3 Las restricciones aplican sobre el volumen o tipo de datos, no sobre los formatos.

6. **UX esperado**  
   6.1 El selector de formato se presenta en un modal claro y accesible.  
   6.2 El modal incluye:  
   - Título: "Seleccionar formato de descarga".  
   - Lista de formatos disponibles con íconos representativos.  
   - Descripción breve de cada formato (ej. "Shapefile – Compatible con ArcGIS y QGIS").  
   - Indicación de formatos recomendados según tipo de geometría.  
   - Advertencias sobre limitaciones (ej. truncamiento de nombres en Shapefile).  
   6.3 El botón de confirmación es claro: "Descargar en [formato]".  
   6.4 El modal incluye opción de cancelar la operación.

7. **Auditoría**  
   7.1 El formato elegido se registra obligatoriamente en el evento de descarga.  
   7.2 El registro de auditoría incluye:  
   - Formato seleccionado.  
   - Formatos disponibles al momento de la selección.  
   - Advertencias mostradas al usuario.  
   7.3 Esta información complementa el registro completo del evento de descarga.

8. **Unicidad**  
   8.1 La selección de formato está asociada a un evento único de descarga.  
   8.2 Cada descarga tiene su propio registro de formato seleccionado.  
   8.3 El identificador único de transacción vincula el formato con el evento completo de descarga.

## ROLES

| Rol | Alcance |
|-----|---------|
| **Administrador IDEAM** | Puede elegir el formato de salida de la descarga |
| **Registrador** | Puede elegir el formato de salida de la descarga |
| **Consulta** | Puede elegir el formato de salida de la descarga |

## RESTRICCIONES Y LÍMITES

- Los formatos disponibles están limitados a los cuatro estándar definidos (Shapefile, GeoJSON, KML, GeoPackage).
- No se permite personalizar o solicitar formatos adicionales.
- Las limitaciones de cada formato (nombres de campo, atributos) son inherentes al estándar y no pueden modificarse.
- La selección de formato debe realizarse antes de iniciar la descarga.
- No se permite cambiar el formato después de iniciada la descarga.
- El formato seleccionado debe ser compatible con la geometría y atributos de los datos.

## VALIDACIONES FUNCIONALES

**Validación de compatibilidad formato–geometría:**
- Verificar que el formato soporte el tipo de geometría presente (punto, línea, polígono, multi-geometría).
- Deshabilitar formatos incompatibles en el selector.
- Mostrar tooltip explicativo en formatos deshabilitados.

**Validación de compatibilidad formato–atributos:**
- Verificar longitud de nombres de campo para Shapefile.
- Truncar automáticamente nombres que excedan 10 caracteres.
- Generar advertencia cuando aplique truncamiento.
- Validar cantidad y tipo de atributos para KML.
- Advertir sobre limitación de atributos en KML.

**Validación de estructura de archivos:**
- Para Shapefile: generar todos los archivos complementarios (.shx, .dbf, .prj, .cpg).
- Empaquetar Shapefile en archivo .zip.
- Para formatos únicos (GeoJSON, KML, GeoPackage): generar archivo único con extensión correcta.
- Incluir información de CRS en todos los formatos.

**Validación de integridad:**
- Verificar que el contenido del dataset sea idéntico entre formatos.
- Validar que las geometrías se exporten correctamente en cada formato.
- Verificar que los atributos se preserven según las capacidades del formato.

## VALIDACIONES DE NEGOCIO

**Formato recomendado:**
- Sugerir automáticamente el formato más apropiado según:
  - Tipo de geometría.
  - Cantidad de atributos.
  - Herramienta de destino probable (si es conocida).
- Resaltar visualmente el formato recomendado en el selector.

**Información al usuario:**
- Mostrar claramente las características de cada formato.
- Advertir sobre limitaciones conocidas (truncamiento, atributos limitados).
- Proporcionar información sobre compatibilidad con herramientas comunes (ArcGIS, QGIS, Google Earth, aplicaciones web).

**Auditoría:**
- Registrar obligatoriamente el formato seleccionado en cada descarga.
- Incluir en el registro las advertencias mostradas al usuario.
- Permitir análisis posterior de preferencias de formato por usuario o tipo de consulta.
- Garantizar trazabilidad completa del proceso de selección.

**Experiencia de usuario:**
- Garantizar que la selección de formato sea intuitiva y rápida.
- Evitar pasos innecesarios en el flujo de descarga.
- Proporcionar retroalimentación visual clara de la selección realizada.
- Permitir cancelar y cambiar de formato antes de iniciar la descarga.
