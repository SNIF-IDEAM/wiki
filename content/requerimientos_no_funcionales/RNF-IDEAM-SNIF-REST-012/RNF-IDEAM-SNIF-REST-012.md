# RNF-IDEAM-SNIF-REST-012  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Auditoría de acciones del usuario

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** auditor institucional / administrador del sistema.  
> **Quiero:** que el sistema registre eventos de acceso, autenticación, validación y cambios críticos para auditoría institucional.  
> **Para:** disponer de evidencia verificable sobre quién accede y qué acciones ejecuta, fortaleciendo control, cumplimiento y respuesta ante incidentes.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Eventos auditables mínimos

1.1 El sistema debe registrar como mínimo los siguientes eventos:
- Acceso al sistema (login exitoso).  
- Intento de autenticación fallido.  
- Cierre de sesión (logout) o expiración (cuando aplique).  
- Accesos denegados por permisos (403) a funcionalidades críticas.  
- Validación y rechazo (cuando aplique).  
- Cambios críticos (por ejemplo: cambios de estado, configuración, parametrización, roles/permisos).  

### 2. Contenido mínimo del evento de auditoría

2.1 Cada evento de auditoría debe registrar como mínimo:
- Usuario (id y/o identificador institucional).  
- Fecha y hora (timestamp).  
- Tipo de evento.  
- Recurso/entidad afectada (si aplica).  
- Resultado (éxito / fallo).  
- Contexto técnico mínimo (ej. IP o identificador de sesión, si aplica y está permitido por política).  

### 3. Protección y confidencialidad de auditoría

3.1 Los registros de auditoría no deben almacenar contraseñas, tokens completos ni secretos.  
3.2 El acceso a auditoría debe estar restringido a roles autorizados (por ejemplo, administrador/auditor).  
3.3 Los registros deben contar con medidas para evitar alteración no autorizada (según política: permisos, inmutabilidad lógica, respaldos).

### 4. Consulta y exportación para auditoría institucional

4.1 El sistema debe permitir consultar auditoría por rango de fechas, usuario y tipo de evento.  
4.2 Debe existir un mecanismo de exportación o entrega de evidencia (por ejemplo, export CSV/JSON o reporte) para auditoría institucional, sujeto a permisos.

### 5. Evidencia de verificación

5.1 Deben existir casos de prueba que demuestren registro de: login, fallo de login, acceso denegado, validación/rechazo y cambio crítico.  
5.2 Debe existir evidencia verificable (capturas/log/export) que muestre los campos mínimos diligenciados y el control de acceso a estos registros.

---

### Resultado esperado

Auditoría institucional completa sobre accesos y acciones críticas, con eventos consistentes, protegidos, consultables y sin exposición de información sensible.

---

## DIAGRAMA DE SECUENCIA

![IMAGEN DIAGRAMA DE SECUENCIA](assets/secuencia-rnf-IDEAM-SNIF-REST-012.png)


## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN DIAGRAMA DE FLUJO DEL PROCESO](assets/actividades-rnf-IDEAM-SNIF-REST-012.png)
