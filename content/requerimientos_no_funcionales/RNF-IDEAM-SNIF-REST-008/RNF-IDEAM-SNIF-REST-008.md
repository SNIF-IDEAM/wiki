# RNF-IDEAM-SNIF-REST-008  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Integridad referencial

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** administrador del sistema / responsable de datos.  
> **Quiero:** que el sistema garantice integridad referencial a nivel de base de datos y lógica de aplicación entre PIGCCT, ejes, medidas, indicadores, acciones y seguimientos.  
> **Para:** asegurar consistencia de la información, evitar referencias huérfanas y mantener la trazabilidad completa del PIGCCT y sus componentes asociados.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Integridad referencial en base de datos

1.1 Las relaciones entre PIGCCT, ejes, medidas, indicadores, acciones y seguimientos deben implementarse con **claves foráneas (FK)** y restricciones de integridad en base de datos, según el modelo aprobado.  
1.2 El sistema debe impedir la creación de registros que referencien entidades inexistentes (por ejemplo, crear una acción asociada a un indicador inexistente).  
1.3 Las restricciones de integridad deben aplicarse de forma consistente en todos los ambientes (DEV/QA/PROD), evitando configuraciones divergentes.

### 2. Validación en lógica de aplicación

2.1 Antes de persistir una relación, el backend debe validar que las entidades referenciadas existan y estén en un estado válido para asociación (por ejemplo, PIGCCT activo cuando aplique).  
2.2 La aplicación debe bloquear asociaciones inválidas y responder con **400 (validación)** o **409 (conflicto)** según estándar definido, indicando la causa de forma clara y no técnica.  
2.3 Las operaciones que afecten relaciones deben conservar consistencia entre capa de aplicación y restricciones en BD (no permitir “saltarse” reglas por endpoints alternos).

### 3. Reglas de eliminación / inactivación sin ruptura de integridad

3.1 El sistema no debe permitir eliminaciones físicas de entidades base si existen dependencias activas (según política institucional).  
3.2 Si se aplica inactivación, el sistema debe conservar las relaciones históricas sin romper integridad referencial.  
3.3 Cualquier intento de eliminar o desasociar de forma que genere registros huérfanos debe ser bloqueado y registrado.

### 4. Evidencia de verificación

4.1 Deben existir pruebas (unitarias/integración) que validen:  
- Rechazo de referencias huérfanas (FK).  
- Rechazo de asociaciones inválidas desde backend.  
- Conservación de relaciones ante inactivación.  

4.2 Debe existir evidencia de constraints (script/migración/DDL) que demuestre implementación de FK.

### 5. Auditoría y trazabilidad

5.1 Los eventos de creación/actualización de relaciones clave deben registrar usuario, fecha/hora, entidad afectada y acción realizada.  
5.2 Los errores de integridad referencial deben registrarse para diagnóstico sin exponer datos sensibles.

---

### Resultado esperado

Relaciones entre PIGCCT y sus componentes (ejes, medidas, indicadores, acciones y seguimientos) consistentes y protegidas mediante **integridad referencial** en BD y validaciones en la aplicación, sin registros huérfanos.

---
