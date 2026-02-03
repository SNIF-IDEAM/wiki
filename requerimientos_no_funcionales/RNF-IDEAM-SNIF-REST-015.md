# RNF-IDEAM-SNIF-REST-015  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Interoperabilidad futura

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / equipo institucional de datos.  
> **Quiero:** que el sistema permita integración futura con otros sistemas institucionales (SIG, BI, portales de datos) mediante servicios estandarizados.  
> **Para:** ampliar consumo de información, habilitar análisis y publicación institucional, y reducir esfuerzos de integración a futuro.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Exposición de servicios para integración

1.1 El sistema debe exponer servicios (API) que permitan consumir información relevante del PIGCCT y su seguimiento por sistemas externos autorizados.  
1.2 La API debe permitir al menos operaciones de **consulta** y **exportación** (según permisos), sin requerir acceso directo a BD.  
1.3 Los servicios deben soportar autenticación para integraciones (por ejemplo, tokens o credenciales institucionales) según política definida.

### 2. Contratos y estabilidad de integración

2.1 Los servicios deben contar con contratos definidos (schemas) para las entidades expuestas, manteniendo consistencia en nombres de campos y tipos de datos.  
2.2 Debe existir una estrategia de compatibilidad/versionamiento para cambios en contratos de datos.  
2.3 La API debe documentar claramente parámetros de filtros típicos (territorio, vigencia, estado, etc.) para consumo externo.

### 3. Seguridad y gobernanza de acceso externo

3.1 El acceso a servicios de integración debe controlarse por permisos/roles y/o scopes definidos, evitando exposición indiscriminada.  
3.2 El sistema debe registrar auditoría de consumos relevantes por integraciones (quién consume, qué endpoint, cuándo, resultado), según política institucional.  
3.3 El sistema debe prevenir exposición de datos sensibles o restringidos en salidas de integración (aplicando reglas de acceso).

### 4. Interoperabilidad con dominios SIG/BI

4.1 Cuando aplique, el sistema debe permitir entregar datos con estructura compatible para herramientas SIG/BI (por ejemplo, formatos estándar y campos consistentes).  
4.2 El sistema debe permitir incluir identificadores estables (IDs) para cruce de información en sistemas externos.

### 5. Evidencia de verificación

5.1 Debe existir documentación de integración (endpoints, formatos, autenticación, ejemplos).  
5.2 Debe existir evidencia de consumo (prueba controlada) desde un cliente externo (Postman/Insomnia o integración mínima) que demuestre acceso autorizado y respuesta estándar.

---

### Resultado esperado

Capacidad preparada para **integración futura** con sistemas institucionales (SIG/BI/portales) mediante servicios estandarizados, con contratos definidos, seguridad aplicada y evidencia de consumo.

---
