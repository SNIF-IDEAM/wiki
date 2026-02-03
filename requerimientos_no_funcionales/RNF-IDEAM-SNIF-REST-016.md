# RNF-IDEAM-SNIF-REST-016  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Uso de estándares

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** consumidor de información (usuario institucional o sistema externo autorizado).  
> **Quiero:** que el sistema utilice estándares abiertos para intercambio de información (JSON, GeoJSON, CSV, REST).  
> **Para:** facilitar interoperabilidad, reutilización de datos y consumo en herramientas institucionales sin dependencias propietarias.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Estándares de API REST

1.1 La API debe implementar principios REST (métodos HTTP, rutas por recurso, códigos HTTP apropiados).  
1.2 Las respuestas de la API deben ser **JSON** por defecto con `Content-Type: application/json`.  
1.3 Los parámetros de filtrado, paginación y ordenamiento deben seguir un estándar definido y documentado.

### 2. Formatos de intercambio de datos

2.1 Para información geográfica (cuando aplique), el sistema debe poder entregar datos en **GeoJSON** con estructura válida (FeatureCollection/Features).  
2.2 Para exportaciones tabulares (cuando aplique), el sistema debe permitir exportar a **CSV**, con encabezados consistentes y codificación estándar (UTF-8).  
2.3 El sistema debe documentar qué endpoints/funcionalidades entregan JSON, GeoJSON y CSV, y bajo qué condiciones/roles.

### 3. Consistencia semántica y de campos

3.1 Los nombres de campos expuestos deben ser consistentes entre respuestas y versiones (evitar cambios sin versionamiento).  
3.2 Deben existir identificadores estables para entidades (IDs) que permitan cruces e integraciones.  
3.3 Los catálogos y valores controlados deben representarse con códigos/valores oficiales cuando aplique.

### 4. Evidencia de verificación

4.1 Deben existir ejemplos verificables (capturas o colecciones) demostrando:
- Respuesta JSON válida.  
- Respuesta GeoJSON válida (cuando aplique).  
- Export CSV correcto (cuando aplique).  

4.2 Debe existir documentación técnica con ejemplos de request/response para cada formato.

---

### Resultado esperado

Intercambio de información mediante **estándares abiertos** (REST/JSON/GeoJSON/CSV) con formatos válidos, contratos consistentes y documentación que habilite consumo institucional y externo.

---

