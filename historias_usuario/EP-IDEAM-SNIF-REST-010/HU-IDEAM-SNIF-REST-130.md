# HU-IDEAM-SNIF-REST-130

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-130\
> **Nombre Historia de Usuario:** Descargar resultados de consultas atributivas

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – SNIF (SIG)\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario autorizado.\
> **Quiero:** descargar los resultados de una consulta atributiva.\
> **Para:** analizarlos fuera del sistema.

## CRITERIOS DE ACEPTACIÓN

1. **Coincidencia con filtros aplicados**  
   1.1 Los datos descargados corresponden exactamente a los filtros atributivos aplicados en la consulta.  
   1.2 No se incluyen registros que no cumplan los criterios de la consulta.  
   1.3 El sistema mantiene la coherencia entre los resultados visibles y los datos exportados.

2. **Límites de volumen**  
   2.1 El sistema valida que los resultados no excedan el límite máximo de descarga (ej. 10.000 registros o 10 MB).  
   2.2 Si se supera el límite, se muestra un mensaje claro indicando el motivo del rechazo.  
   2.3 El mensaje informa la cantidad de registros en los resultados y el límite permitido.  
   2.4 Se sugiere al usuario refinar la consulta para reducir el volumen.

3. **Integridad referencial**  
   3.1 Los datos descargados son idénticos a los resultados visibles en la tabla de resultados.  
   3.2 Se mantiene la correspondencia exacta entre:  
   - Registros en tabla.  
   - Elementos seleccionados en el mapa.  
   - Datos exportados.  
   3.3 La información de CRS se incluye obligatoriamente en todos los archivos.

4. **Formato permitido**  
   4.1 El sistema permite la descarga en formatos geoespaciales estándar:  
   - Shapefile (.shp).  
   - GeoJSON (.geojson).  
   - KML (.kml).  
   - GeoPackage (.gpkg).  
   4.2 El formato se selecciona mediante un menú desplegable claro.  
   4.3 La descarga incluye todos los archivos complementarios requeridos por el formato.

5. **Control por roles**  
   5.1 El sistema valida que el usuario tenga permisos de consulta y descarga.  
   5.2 Los usuarios con restricciones solo pueden descargar resultados dentro de los límites definidos para su rol.  
   5.3 Usuarios sin permisos no visualizan la opción de descarga.  
   5.4 Los intentos de descarga no autorizados son rechazados con código de error apropiado (403 Forbidden).

6. **UX esperado**  
   6.1 La opción de descarga se integra directamente a la tabla de resultados.  
   6.2 El botón "Descargar datos" es visible y consistente con otras funcionalidades.  
   6.3 El sistema muestra mensajes claros de:  
   - Éxito de descarga.  
   - Error en descarga.  
   - Exceso de límites.  
   - Restricciones por rol.  
   6.4 El proceso es sencillo, predecible y coherente.

7. **Auditoría**  
   7.1 Toda descarga se registra obligatoriamente en REGISTROS DEL SISTEMA, incluyendo:  
   - Usuario.  
   - Fecha y hora.  
   - Capa descargada.  
   - Origen de la descarga: "consulta atributiva".  
   - Tipo de consulta asociada (filtros aplicados).  
   - Formato de salida seleccionado.  
   - Cantidad de registros exportados.  
   7.2 Los registros son consultables por administradores.

8. **Unicidad**  
   8.1 Cada evento de descarga cuenta con un identificador único de transacción.  
   8.2 El identificador se almacena en los registros del sistema para trazabilidad.

## ROLES

| Rol | Alcance |
|-----|---------|
| **Administrador IDEAM** | Puede descargar resultados de consultas atributivas |
| **Registrador** | Puede descargar resultados de consultas atributivas con restricciones |
| **Consulta** | Puede descargar resultados de consultas atributivas con restricciones |

## RESTRICCIONES Y LÍMITES

- Límite máximo de descarga: 10.000 registros o 10 MB (el que se alcance primero).
- Los usuarios con rol "Registrador" y "Consulta" están sujetos a restricciones adicionales según política institucional.
- Solo se permite descargar resultados que el usuario puede visualizar.
- Los formatos de salida están limitados a los estándar geoespaciales definidos.
- La reproyección se realiza obligatoriamente a EPSG:4326.
- No se permite modificar los datos durante la descarga.
- El proceso de descarga no debe comprometer el desempeño del sistema.
- Las descargas simultáneas por usuario están sujetas a límites de concurrencia.

## VALIDACIONES FUNCIONALES

**Validación de formato:**
- Verificar compatibilidad entre formato de salida y tipo de geometría.
- Truncar automáticamente nombres de campo para Shapefile (máx. 10 caracteres).
- Incluir metadatos obligatorios según formato.
- Para KML, incluir solo atributos esenciales.

**Validación de geometría:**
- Verificar geometrías válidas según estándar OGC.
- Excluir registros con geometrías vacías o nulas.
- Informar registros excluidos al usuario.

**Validación de volumen:**
- Verificar límites antes de iniciar descarga.
- Rechazar descarga si se exceden límites.
- Proporcionar mensaje informativo con el motivo del rechazo y sugerencia de refinamiento.

**Validación de consulta:**
- Verificar que existan resultados de consulta activos.
- Validar que los filtros aplicados sean válidos.
- Garantizar correspondencia exacta entre consulta y datos exportados.

## VALIDACIONES DE NEGOCIO

**Control de permisos:**
- Validar rol del usuario antes de mostrar opción de descarga.
- Aplicar restricciones específicas según rol (Registrador, Consulta).
- Validar permisos de consulta y descarga simultáneamente.
- Registrar intentos de acceso no autorizado.

**Integridad de datos:**
- Verificar que los resultados de consulta estén disponibles y sean válidos.
- Garantizar que los datos descargados corresponden exactamente a los resultados de la consulta atributiva.
- Incluir información completa de CRS en todos los archivos.
- Mantener coherencia entre tabla de resultados, mapa y datos exportados.

**Auditoría:**
- Registrar obligatoriamente cada evento de descarga.
- Incluir información completa de trazabilidad y contexto de consulta.
- Almacenar filtros atributivos aplicados en el registro de auditoría.
- Garantizar persistencia de registros de auditoría.

**Restricciones por rol:**
- Aplicar límites diferenciados según perfil de usuario.
- Validar que las restricciones se cumplan antes de permitir la descarga.
- Informar claramente las restricciones aplicadas al usuario.
