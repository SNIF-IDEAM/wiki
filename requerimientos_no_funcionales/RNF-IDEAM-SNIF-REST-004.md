# RNF-IDEAM-SNIF-REST-004  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Seguridad de archivos adjuntos

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / responsable de seguridad.  
> **Quiero:** que el sistema valide tipo MIME, tamaño y ubicación segura de almacenamiento de archivos adjuntos.  
> **Para:** evitar ejecución o exposición de archivos maliciosos, reducir riesgos de malware y proteger información institucional.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Validación de tipo de archivo (MIME y extensión)

1.1 El sistema debe permitir únicamente tipos de archivo definidos en una lista blanca (whitelist) por **MIME type** (y/o extensiones permitidas).  
1.2 Si un archivo no cumple con la whitelist, el sistema debe bloquear la carga y mostrar un mensaje claro.  
1.3 El sistema debe validar el tipo real del archivo (no solo la extensión) para prevenir suplantación.

### 2. Validación de tamaño y límites

2.1 El sistema debe imponer un tamaño máximo de carga (configurable).  
2.2 Si el archivo supera el límite, el sistema debe rechazar la carga y notificar al usuario el máximo permitido.  
2.3 El límite debe aplicarse tanto en frontend como en backend, siendo el backend el control definitivo.

### 3. Almacenamiento seguro

3.1 Los archivos deben almacenarse en una ubicación segura que **no permita ejecución directa**.  
3.2 El sistema debe generar nombres internos (no usar el nombre original como ruta final) para evitar path traversal o colisiones.  
3.3 El acceso/descarga de archivos debe requerir autorización y permisos del usuario (no acceso público directo).

### 4. Protección contra exposición y contenido malicioso

4.1 El sistema debe prevenir la exposición de rutas internas del servidor al usuario final.  
4.2 El sistema debe registrar metadatos del archivo (usuario, fecha/hora, tamaño, tipo, entidad asociada) para auditoría.  
4.3 El sistema debe rechazar cargas con firmas o patrones claramente maliciosos cuando exista integración definida (si aplica).

### 5. Mensajes y auditoría

5.1 Los eventos de carga, descarga y eliminación lógica (si aplica) deben quedar auditados.  
5.2 Los mensajes de error deben ser claros y no técnicos, indicando el motivo (tipo no permitido, excede tamaño, etc.).

---

### Resultado esperado

Archivos adjuntos cargados y gestionados de forma segura, con validación estricta de tipo y tamaño, almacenamiento no ejecutable y acceso controlado por permisos, garantizando trazabilidad.

---
