# HU-IDEAM-SNIF-REST-092

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-092\
> **Nombre Historia de Usuario:** Validar formato del archivo adjunto

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** sistema.\
> **Quiero:** permitir únicamente formatos autorizados para adjuntos.\
> **Para:** garantizar seguridad y compatibilidad documental.

## CRITERIOS DE ACEPTACIÓN

1. **Formatos permitidos configurables**  
   1.1 El sistema debe permitir configurar los formatos autorizados por lineamientos institucionales.  

2. **Validación de formato**  
   2.1 Si el archivo no corresponde a un formato permitido, el sistema debe bloquear la carga.  
   2.2 El sistema debe informar al usuario el formato no permitido.

3. **Cobertura mínima de formatos**  
   3.1 El sistema debe soportar al menos:  
   - Documentos: PDF, DOC, DOCX  
   - Hojas de cálculo: XLS, XLSX, CSV  
   - Imágenes: JPG, PNG  
   - Geoespaciales: SHP, GeoJSON, KML  

## ROLES

- **Administrador IDEAM:** Aplica validación del sistema.
- **Registrador:** Aplica validación del sistema.
- **Usuario Consulta:** No aplica.

## RESTRICCIONES Y LÍMITES

- Los formatos son definidos por configuración institucional.
- Validación backend obligatoria.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-092.png)(historias_usuario/EP-IDEAM-SNIF-REST-006/assets/actividades-hu-ideam-snif-rest-092.png)