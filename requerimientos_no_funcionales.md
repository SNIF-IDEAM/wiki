---
title: Requerimientos No Funcionales
description: Requerimientos No del Módulo de restauración SNIF del IDEAM
---
# Épica: Requerimientos No Funcionales del Módulo de restauración

## 1. Descripción general

Esta épica define los requerimientos no funcionales del Módulo de restauración del SNIF, estableciendo los atributos de calidad que garantizan su operación segura, confiable, escalable y sostenible.

Los requerimientos no funcionales constituyen un marco transversal que aplica a todos los módulos del sistema, asegurando coherencia arquitectónica, integridad de la información, trazabilidad institucional y una experiencia de usuario adecuada para los distintos perfiles involucrados en la gestión del Módulo de restauración del SNIF.

---

## 2. Objetivo

Establecer los criterios técnicos, operativos y de calidad que debe cumplir el sistema para garantizar su correcto funcionamiento, asegurando seguridad de la información, disponibilidad, rendimiento, integridad de datos, interoperabilidad, trazabilidad y facilidad de mantenimiento durante todo el ciclo de vida del sistema.

---

## 3. Justificación / Valor de negocio

La definición y cumplimiento de los requerimientos no funcionales:

- Garantiza la confiabilidad y estabilidad del sistema en operación institucional.
- Protege la información estratégica y territorial del Módulo de restauración del SNIF.
- Reduce riesgos operativos, técnicos y de seguridad.
- Facilita la escalabilidad y evolución futura del sistema.
- Asegura una experiencia de uso adecuada para los diferentes roles.
- Permite auditoría, control y trazabilidad de las acciones realizadas.
- Fortalece la gobernanza y calidad de la información del Módulo de restauración del SNIF.
- Asegura la interoperabilidad con otros sistemas institucionales.

---

## 4. Alcance

### Incluye:

- Seguridad de autenticación y autorización.
- Control de acceso basado en roles y permisos.
- Gestión de sesiones y protección de información sensible.
- Rendimiento, tiempos de respuesta y manejo de concurrencia.
- Escalabilidad de la arquitectura.
- Integridad, consistencia y calidad de los datos.
- Trazabilidad, auditoría y registro de eventos.
- Disponibilidad, confiabilidad y recuperación ante fallos.
- Usabilidad, accesibilidad básica y consistencia de interfaz.
- Interoperabilidad y uso de estándares abiertos.
- Mantenibilidad, configurabilidad y extensibilidad del sistema.

### No incluye:

- Definición de reglas funcionales específicas de cada módulo.
- Diseño detallado de interfaces gráficas.
- Implementación técnica específica de infraestructura.
- Configuración física de servidores o redes.
- Procesos de validación técnica del contenido del Módulo de restauración del SNIF.
- Reglas de negocio particulares de acciones, indicadores o reportes.

---

## 5. Actores / Roles

- **Administrador del sistema:** Configura parámetros generales, gestiona seguridad, permisos y monitorea el cumplimiento de los requerimientos no funcionales.
- **Usuario del sistema:** Hace uso de las funcionalidades garantizadas por los atributos de calidad definidos.
- **Usuarios de otros módulos:** Se benefician del funcionamiento transversal, seguro y confiable del sistema.
- **Equipo técnico:** Implementa, mantiene y evoluciona la arquitectura conforme a los requerimientos no funcionales.
- **Sistema:** Aplica controles de seguridad, validaciones, registros de auditoría y mecanismos de disponibilidad y recuperación.

---

## 6. Principios de diseño

- Seguridad por diseño y por defecto.
- Arquitectura desacoplada y modular.
- Integridad y consistencia de la información.
- Trazabilidad completa de las acciones.
- No eliminación de información histórica relevante.
- Escalabilidad y evolución progresiva.
- Uso de estándares abiertos y buenas prácticas.
- Simplicidad operativa y claridad para el usuario.
- Separación entre lógica funcional y atributos de calidad.

---

## 7. Estructura general del marco no funcional

El marco de requerimientos no funcionales se organiza en:

- Seguridad y control de acceso.
- Rendimiento y escalabilidad.
- Integridad y calidad de datos.
- Auditoría y trazabilidad.
- Disponibilidad y confiabilidad.
- Usabilidad y experiencia de usuario.
- Interoperabilidad y arquitectura.
- Mantenibilidad y evolución del sistema.

---

## 8. Historias de usuario asociadas

- [**RNF-IDEAM-SNIF-REST-001**: Seguridad de autenticación.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-001.md)
- [**RNF-IDEAM-SNIF-REST-002**: Autorización basada en roles.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-002.md)
- [**RNF-IDEAM-SNIF-REST-003**: Protección contra accesos no autorizados.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-003.md)
- [**RNF-IDEAM-SNIF-REST-004**: Seguridad de archivos adjuntos.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-004.md)
- [**RNF-IDEAM-SNIF-REST-005**: Tiempo de respuesta.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-005.md)
- [**RNF-IDEAM-SNIF-REST-006**: Manejo de concurrencia.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-006.md)
- [**RNF-IDEAM-SNIF-REST-007**: Escalabilidad horizontal.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-007.md)
- [**RNF-IDEAM-SNIF-REST-008**: Integridad referencial.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-008.md)
- [**RNF-IDEAM-SNIF-REST-009**: Consistencia transaccional.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-009.md)
- [**RNF-IDEAM-SNIF-REST-010**: Prevención de duplicidades.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-010.md)
- [**RNF-IDEAM-SNIF-REST-011**: Trazabilidad completa.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-011.md)
- [**RNF-IDEAM-SNIF-REST-012**: Auditoría de acciones del usuario.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-012.md)
- [**RNF-IDEAM-SNIF-REST-013**: No pérdida de información histórica.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-013.md)
- [**RNF-IDEAM-SNIF-REST-014**: Arquitectura desacoplada.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-014.md)
- [**RNF-IDEAM-SNIF-REST-015**: Interoperabilidad futura.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-015.md)
- [**RNF-IDEAM-SNIF-REST-016**: Uso de estándares.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-016.md)
- [**RNF-IDEAM-SNIF-REST-017**: Usabilidad guiada.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-017.md)
- [**RNF-IDEAM-SNIF-REST-018**: Consistencia visual y funcional.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-018.md)
- [**RNF-IDEAM-SNIF-REST-019**: Accesibilidad básica.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-019.md)
- [**RNF-IDEAM-SNIF-REST-020**: Disponibilidad operativa.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-020.md)
- [**RNF-IDEAM-SNIF-REST-021**: Manejo de errores controlado.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-021.md)
- [**RNF-IDEAM-SNIF-REST-022**: Recuperación ante fallos.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-022.md)
- [**RNF-IDEAM-SNIF-REST-023**: Extensibilidad funcional.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-023.md)
- [**RNF-IDEAM-SNIF-REST-024**: Documentación técnica.](/requerimientos_no_funcionales/RNF-IDEAM-SNIF-REST-024.md)

---

## 9. Reglas no funcionales del sistema

### Seguridad

El sistema debe garantizar autenticación segura, control de acceso por roles, protección de información sensible y manejo seguro de sesiones.

### Rendimiento

El sistema debe responder en tiempos aceptables bajo condiciones normales de operación y soportar usuarios concurrentes sin degradación crítica.

### Integridad de datos

El sistema debe garantizar integridad referencial, consistencia transaccional y prevención de duplicidades.

### Auditoría y trazabilidad

El sistema debe registrar eventos de creación, modificación, validación, acceso y errores relevantes para control institucional.

### Disponibilidad

El sistema debe mantener alta disponibilidad operativa y mecanismos de recuperación ante fallos sin pérdida de información validada.

### Usabilidad

El sistema debe ofrecer una experiencia clara, consistente y guiada para los usuarios institucionales.

### Interoperabilidad

El sistema debe exponer servicios y datos mediante estándares abiertos para integración futura.

---

## 10. Criterios de éxito

- El sistema opera de forma segura y estable.
- No se presentan pérdidas de información.
- Los tiempos de respuesta son aceptables.
- Los eventos y acciones quedan correctamente auditados.
- Los usuarios pueden operar el sistema sin ambigüedad.
- La arquitectura soporta evolución y escalabilidad.
- La información es interoperable con otros sistemas.

---

## 11. Dependencias y supuestos

### Dependencias

- Definición clara de roles y permisos institucionales.
- Infraestructura mínima para garantizar disponibilidad.
- Catálogos y reglas funcionales correctamente definidos.
- Integración con sistemas institucionales existentes.

### Supuestos

- El sistema es de uso institucional.
- Los usuarios cuentan con capacitación básica.
- La seguridad es una prioridad transversal.
- No se permite la eliminación física de información relevante.
- Los requerimientos no funcionales aplican a todos los módulos.

---

## 12. Riesgos

- Configuración inadecuada de seguridad.
- Sobrecarga del sistema por uso concurrente.
- Fallas en la gestión de sesiones.
- Deficiente trazabilidad de eventos.
- Falta de estandarización en integraciones futuras.
- Dependencia de infraestructura insuficiente.

---

## 13. Estado y seguimiento

**Estado actual:** En definición

**Indicadores de seguimiento:**

- Incidentes de seguridad reportados.
- Disponibilidad del sistema.
- Tiempos promedio de respuesta.
- Eventos auditados correctamente.
- Uso concurrente del sistema.
- Incidencias técnicas registradas.
