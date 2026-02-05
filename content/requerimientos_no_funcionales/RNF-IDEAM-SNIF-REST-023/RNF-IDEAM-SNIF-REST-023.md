# RNF-IDEAM-SNIF-REST-023  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Extensibilidad funcional

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** equipo de arquitectura / desarrollo TI.  
> **Quiero:** que la arquitectura permita agregar nuevos catálogos, indicadores, reglas de validación o módulos sin reestructuración del sistema.  
> **Para:** asegurar evolución sostenible, incorporar cambios normativos o institucionales y ampliar funcionalidades sin rediseños disruptivos.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Extensión de catálogos y entidades sin ruptura

1.1 El sistema debe permitir incorporar nuevos catálogos o ampliar catálogos existentes sin afectar datos históricos ni funcionalidades actuales.  
1.2 La incorporación de nuevos indicadores o atributos debe seguir un patrón definido (por ejemplo, migraciones controladas), evitando reestructuraciones masivas o pérdida de integridad.  
1.3 La estructura de relaciones clave debe soportar crecimiento (por ejemplo, nuevos tipos de indicador asociados a medidas/acciones) sin romper integridad referencial.

### 2. Extensibilidad de reglas de validación

2.1 Las reglas de validación deben implementarse de forma modular y reutilizable, permitiendo agregar nuevas reglas sin reescribir reglas existentes (por ejemplo, estrategia por capas, motor/reglas parametrizadas cuando aplique).  
2.2 Las reglas nuevas deben poder habilitarse/deshabilitarse por configuración cuando sea parte del diseño del sistema.  
2.3 Las reglas deben mantenerse consistentes entre frontend (validaciones de apoyo) y backend (validación definitiva).

### 3. Capacidad de crecimiento por módulos

3.1 La arquitectura debe permitir incorporar nuevos módulos funcionales (por ejemplo, nuevos componentes de seguimiento, reportes, integraciones) sin alterar el núcleo del sistema de forma disruptiva.  
3.2 La API debe permitir ampliar endpoints manteniendo compatibilidad (versionamiento o estrategia de compatibilidad definida).

### 4. Evidencia de verificación

4.1 Debe existir evidencia de un ejercicio controlado (en ambiente QA o similar) demostrando al menos una extensión (por ejemplo, agregar un catálogo nuevo o una regla de validación nueva) sin afectar módulos existentes.  
4.2 Debe existir evidencia de que la extensión no rompe:
- Autenticación/autorización.  
- Integridad referencial.  
- Operaciones CRUD y flujos principales.  

### 5. Documentación y lineamientos de extensión

5.1 El sistema debe contar con lineamientos técnicos para extensiones (cómo agregar catálogos, reglas, módulos), disponibles para el equipo.  
5.2 Debe existir una convención de versionamiento y despliegue para extensiones (migraciones, pruebas, rollback).

---

### Resultado esperado

Arquitectura extensible que permite incorporar nuevos catálogos, indicadores, reglas o módulos sin reestructuración disruptiva, manteniendo compatibilidad, integridad y operación estable.

---
