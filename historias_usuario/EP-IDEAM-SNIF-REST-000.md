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

- [**HU-IDEAM-SNIF-REST-001:** Visualizar visor geográfico principal](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-001.md)
- [**HU-IDEAM-SNIF-REST-002:** Cargar y visualizar capas geográficas en el visor](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-002.md)
- [**HU-IDEAM-SNIF-REST-003:** Controlar visibilidad y orden de capas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-003.md)
- [**HU-IDEAM-SNIF-REST-004:** Navegar por el mapa (zoom, pan, extent)](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-004.md)
- [**HU-IDEAM-SNIF-REST-005:** Consultar atributos de elementos en el mapa](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-005.md)
- [**HU-IDEAM-SNIF-REST-006:** Realizar búsquedas espaciales por geometría](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-006.md)
- [**HU-IDEAM-SNIF-REST-007:** Realizar búsquedas espaciales por coordenadas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-007.md)
- [**HU-IDEAM-SNIF-REST-008:** Medir distancias y áreas en el mapa](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-008.md)
- [**HU-IDEAM-SNIF-REST-009:** Cambiar mapa base del visor](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-009.md)
- [**HU-IDEAM-SNIF-REST-010:** Visualizar leyenda de capas activas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-010.md)
- [**HU-IDEAM-SNIF-REST-011:** Exportar vista del mapa como imagen](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-011.md)
- [**HU-IDEAM-SNIF-REST-012:** Restablecer vista inicial del mapa](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-012.md)
- [**HU-IDEAM-SNIF-REST-013:** Visualizar tabla de resultados de consultas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-013.md)
- [**HU-IDEAM-SNIF-REST-014:** Sincronizar selección mapa-tabla](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-014.md)
- [**HU-IDEAM-SNIF-REST-015:** Filtrar resultados de consultas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-015.md)
- [**HU-IDEAM-SNIF-REST-016:** Ordenar columnas en tabla de resultados](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-016.md)
- [**HU-IDEAM-SNIF-REST-017:** Paginar resultados de consultas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-017.md)
- [**HU-IDEAM-SNIF-REST-018:** Limpiar selección y consultas activas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-018.md)
- [**HU-IDEAM-SNIF-REST-019:** Visualizar información de coordenadas del cursor](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-019.md)
- [**HU-IDEAM-SNIF-REST-020:** Controlar opacidad de capas](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-020.md)
- [**HU-IDEAM-SNIF-REST-021:** Aplicar filtros atributivos a capas visibles](/historias_usuario/EP-IDEAM-SNIF-REST-000/HU-IDEAM-SNIF-REST-021.md)

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
