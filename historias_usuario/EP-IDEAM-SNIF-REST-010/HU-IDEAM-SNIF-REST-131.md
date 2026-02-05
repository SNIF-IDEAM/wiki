# HU-IDEAM-SNIF-REST-131

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-131\
> **Nombre Historia de Usuario:** Descargar resultados de consultas espaciales

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración – SNIF (SIG)\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario autorizado.\
> **Quiero:** descargar los resultados de una consulta espacial.\
> **Para:** reutilizar el análisis geográfico realizado.

## CRITERIOS DE ACEPTACIÓN

1. **Compatibilidad geometría–formato**  
   1.1 El sistema valida la compatibilidad entre el tipo de geometría de los resultados y el formato de salida seleccionado.  
   1.2 Se rechaza la descarga si el formato no soporta el tipo de geometría presente en los resultados.  
   1.3 El sistema muestra un mensaje claro indicando incompatibilidades y sugiere formatos alternativos.  
   1.4 Los formatos soportados se ajustan al tipo de geometría (punto, línea, polígono, multi-geometría).

2. **Reproyección obligatoria**  
   2.1 Todos los datos descargados se reproyectan obligatoriamente a EPSG:4326 (WGS84).  
   2.2 La información del sistema de referencia espacial (CRS) se incluye explícitamente en todos los archivos.  
   2.3 El proceso de reproyección mantiene la integridad geométrica de los datos.  
   2.4 El sistema registra el CRS original y el CRS de salida en la auditoría.

3. **Integridad referencial espacial**  
   3.1 Los resultados espaciales descargados son coherentes con lo visualizado en el mapa.  
   3.2 Se mantiene la correspondencia exacta entre:  
   - Elementos seleccionados en el mapa.  
   - Registros en la tabla de resultados.  
   - Datos exportados.  
   3.3 Las geometrías descargadas coinciden pixel a pixel con las representadas en el visor.  
   3.4 No se incluyen registros que no cumplan los criterios espaciales de la consulta.

4. **Tipos de consultas espaciales soportadas**  
   4.1 El sistema permite descargar resultados de consultas espaciales por:  
   - Dibujo de geometría (punto, línea, polígono).  
   - Coordenadas específicas.  
   - Capa externa cargada por el usuario.  
   - Búfer o zona de influencia.  
   4.2 El tipo de consulta espacial se registra en la auditoría.

5. **Límites de volumen**  
   5.1 El sistema valida que los resultados no excedan el límite máximo de descarga (ej. 10.000 registros o 10 MB).  
   5.2 Si se supera el límite, se muestra un mensaje claro indicando el motivo del rechazo.  
   5.3 Se sugiere al usuario refinar el área de consulta o aplicar filtros adicionales.

6. **Control por roles**  
   6.1 El sistema valida que el usuario tenga permisos según su perfil.  
   6.2 Los usuarios "Registrador" y "Consulta" están sujetos a restricciones adicionales de volumen o área.  
   6.3 Usuarios sin permisos no visualizan la opción de descarga.  
   6.4 Los intentos de descarga no autorizados son rechazados con código de error apropiado (403 Forbidden).

7. **UX esperado**  
   7.1 La opción de descarga es accesible directamente desde la vista de resultados de la consulta espacial.  
   7.2 El botón "Descargar datos" es visible y consistente con otras funcionalidades.  
   7.3 El sistema muestra mensajes claros de:  
   - Éxito de descarga.  
   - Error en descarga.  
   - Exceso de límites.  
   - Incompatibilidades de formato.  
   7.4 El proceso es sencillo, predecible y coherente.

8. **Auditoría**  
   8.1 Toda descarga se registra obligatoriamente en REGISTROS DEL SISTEMA, incluyendo:  
   - Usuario.  
   - Fecha y hora.  
   - Capa descargada.  
   - Origen de la descarga: "consulta espacial".  
   - Tipo de consulta espacial (dibujo, coordenadas, capa externa, búfer).  
   - Criterios espaciales aplicados.  
   - Formato de salida seleccionado.  
   - Cantidad de registros exportados.  
   - CRS original y CRS de salida.  
   8.2 Cada evento tiene un identificador único de transacción para trazabilidad completa.

## ROLES

| Rol | Alcance |
|-----|---------|
| **Administrador IDEAM** | Puede descargar resultados de consultas espaciales |
| **Registrador** | Puede descargar resultados de consultas espaciales con restricciones |
| **Consulta** | Puede descargar resultados de consultas espaciales con restricciones |

## RESTRICCIONES Y LÍMITES

- Límite máximo de descarga: 10.000 registros o 10 MB (el que se alcance primero).
- Los usuarios "Registrador" y "Consulta" pueden tener límites adicionales según política institucional.
- Solo se permite descargar resultados que el usuario puede visualizar en el mapa.
- La reproyección es obligatoria a EPSG:4326 (WGS84).
- Los formatos de salida están limitados a los estándar geoespaciales definidos.
- El proceso de descarga no debe comprometer el desempeño del sistema.
- Las descargas simultáneas por usuario están sujetas a límites de concurrencia.
- No se permite modificar las geometrías durante la descarga.

## VALIDACIONES FUNCIONALES

**Validación de formato:**
- Verificar compatibilidad entre formato de salida y tipo de geometría.
- Rechazar combinaciones incompatibles (ej. KML con atributos complejos).
- Truncar automáticamente nombres de campo para Shapefile (máx. 10 caracteres).
- Incluir metadatos obligatorios según formato.

**Validación de geometría:**
- Verificar geometrías válidas según estándar OGC.
- Excluir registros con geometrías vacías o nulas.
- Validar integridad geométrica después de la reproyección.
- Informar registros excluidos al usuario.

**Validación de reproyección:**
- Verificar que la reproyección a EPSG:4326 sea exitosa.
- Mantener precisión geométrica dentro de tolerancias aceptables.
- Incluir información completa de CRS en archivos de salida.

**Validación de volumen:**
- Verificar límites antes de iniciar descarga.
- Rechazar descarga si se exceden límites.
- Proporcionar mensaje informativo con sugerencias de refinamiento.

**Validación de consulta espacial:**
- Verificar que existan resultados de consulta espacial activos.
- Validar que los criterios espaciales aplicados sean válidos.
- Garantizar correspondencia exacta entre consulta espacial y datos exportados.

## VALIDACIONES DE NEGOCIO

**Control de permisos:**
- Validar rol del usuario antes de mostrar opción de descarga.
- Aplicar restricciones específicas según rol (Registrador, Consulta).
- Validar permisos de consulta espacial y descarga simultáneamente.
- Registrar intentos de acceso no autorizado.

**Integridad espacial:**
- Verificar que los resultados de consulta espacial estén disponibles y sean válidos.
- Garantizar que los datos descargados corresponden exactamente a los criterios espaciales aplicados.
- Mantener coherencia entre mapa, tabla de resultados y datos exportados.
- Validar que las geometrías exportadas sean espacialmente consistentes con la consulta.

**Auditoría:**
- Registrar obligatoriamente cada evento de descarga.
- Incluir información completa de trazabilidad y contexto espacial.
- Almacenar criterios espaciales aplicados en el registro de auditoría.
- Registrar tipo específico de consulta espacial (dibujo, coordenadas, capa externa, búfer).
- Garantizar persistencia de registros de auditoría.

**Restricciones por rol:**
- Aplicar límites diferenciados según perfil de usuario.
- Validar que las restricciones se cumplan antes de permitir la descarga.
- Informar claramente las restricciones aplicadas al usuario.
