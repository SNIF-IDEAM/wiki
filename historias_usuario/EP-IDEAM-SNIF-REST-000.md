# Épica 000: Visor Geográfico y Funcionalidades de Consulta Espacial

## 1. Descripción general

Esta épica define las funcionalidades fundamentales del visor geográfico del módulo de restauración del Sistema Nacional de Información Forestal (SNIF). El visor constituye la herramienta principal de consulta y análisis espacial de los proyectos de restauración validados por el IDEAM.

El visor geográfico está diseñado como una aplicación de consulta (no edición), que permite a usuarios autenticados e invitados explorar información geoespacial mediante herramientas de navegación, consulta atributiva y espacial, visualización de capas temáticas, y funcionalidades de análisis básico.

La gestión del visor está controlada por roles, donde cada perfil de usuario (Administrador IDEAM, Registrador, Consulta/Invitado) tiene acceso diferenciado a las funcionalidades según las reglas institucionales definidas.

---

## 2. Objetivo

Proporcionar un **visor geográfico robusto, intuitivo y funcional** que permita a los usuarios del módulo de restauración del SNIF consultar, analizar y visualizar información geoespacial de proyectos de restauración validados por el IDEAM, garantizando:

- Acceso diferenciado por roles y permisos.
- Consulta de información espacial y atributiva.
- Navegación y exploración geográfica eficiente.
- Visualización de múltiples capas temáticas.
- Herramientas de medición y análisis básico.
- Integración con catálogo de capas y módulo de descargas.
- Trazabilidad de interacciones del usuario con el visor.

---

## 3. Historias de usuario asociadas

- [**HU-IDEAM-SNIF-REST-001:** Visualizar visor geográfico principal](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-001.md)
- [**HU-IDEAM-SNIF-REST-002:** Inicializar visor con configuración institucional IDEAM–SNIF](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-002.md)
- [**HU-IDEAM-SNIF-REST-003:** Mostrar coordenadas del cursor](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-003.md)
- [**HU-IDEAM-SNIF-REST-004:** Controles básicos de navegación](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-004.md)
- [**HU-IDEAM-SNIF-REST-005:** Selección de mapa base](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-005.md)
- [**HU-IDEAM-SNIF-REST-006:** Control de capas visibles](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-006.md)
- [**HU-IDEAM-SNIF-REST-007:** Visualizar sidebar izquierdo colapsable](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-007.md)
- [**HU-IDEAM-SNIF-REST-008:** Catálogo de capas temáticas](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-008.md)
- [**HU-IDEAM-SNIF-REST-009:** Procesos disponibles desde el visor](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-009.md)
- [**HU-IDEAM-SNIF-REST-010:** Consultas geográficas](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-010.md)
- [**HU-IDEAM-SNIF-REST-011:** Listar proyectos desde el visor](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-011.md)
- [**HU-IDEAM-SNIF-REST-012:** Filtrar proyectos desde el visor](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-012.md)
- [**HU-IDEAM-SNIF-REST-013:** Visualizar proyectos en tabla de datos](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-013.md)
- [**HU-IDEAM-SNIF-REST-014:** Acciones por proyecto desde el listado](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-014.md)
- [**HU-IDEAM-SNIF-REST-015:** Formulario modal del proyecto sobre el visor](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-015.md)
- [**HU-IDEAM-SNIF-REST-016:** Formulario por pestañas del proyecto](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-016.md)
- [**HU-IDEAM-SNIF-REST-017:** Panel de estadísticas en el sidebar](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-017.md)
- [**HU-IDEAM-SNIF-REST-018:** Actualización dinámica de estadísticas](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-018.md)
- [**HU-IDEAM-SNIF-REST-019:** Visualizar estado de validación del proyecto](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-019.md)
- [**HU-IDEAM-SNIF-REST-020:** Detalle de validación en tooltip](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-020.md)
- [**HU-IDEAM-SNIF-REST-021:** Control de funcionalidades del visor por rol](EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-021.md)

---

## 4. Riesgos

- Desempeño degradado con múltiples capas activas simultáneamente.
- Inconsistencias entre visualización en mapa y tabla de resultados.
- Acceso no autorizado a funcionalidades restringidas por rol.
- Pérdida de contexto al cambiar entre vistas o limpiar consultas.
- Servicios geoespaciales no disponibles o con latencia alta.
- Incompatibilidad con navegadores o dispositivos no soportados.
- Falta de sincronización entre selecciones en mapa y tabla.

---

## 5. Alcance funcional

### Visualización y navegación
- Visor geográfico principal con mapa interactivo
- Control de capas (visibilidad, orden, opacidad)
- Navegación espacial (zoom, pan, extent)
- Cambio de mapas base
- Leyenda dinámica de capas activas
- Información de coordenadas del cursor

### Consultas espaciales y atributivas
- Consulta de atributos por clic en el mapa
- Búsquedas espaciales por geometría dibujada
- Búsquedas espaciales por coordenadas
- Filtros atributivos sobre capas
- Tabla de resultados con sincronización mapa-tabla

### Herramientas de análisis
- Medición de distancias
- Medición de áreas
- Exportación de vista del mapa como imagen

### Gestión de resultados
- Filtrado de resultados
- Ordenamiento de columnas
- Paginación de resultados
- Limpiar selección y consultas

---

## 6. Control por roles

| Rol | Alcance de funcionalidades |
|-----|---------------------------|
| **Invitado / Consulta** | Visualización, navegación, consultas básicas, mediciones |
| **Registrador** | Todo lo anterior + acceso a capas adicionales según permisos |
| **Administrador IDEAM** | Acceso completo a todas las funcionalidades del visor |

---

## 7. Diagrama de secuencia

[![IMAGEN DIAGRAMA DE SECUENCIA](EP-IDEAM-SNIF-REST-000/assets/secuencia-ep-ideam-snif-rest-000.png)](EP-IDEAM-SNIF-REST-000/assets/secuencia-ep-ideam-snif-rest-000.png)

---

## 8. Wireframes / mockups

_Pendiente de generación_
