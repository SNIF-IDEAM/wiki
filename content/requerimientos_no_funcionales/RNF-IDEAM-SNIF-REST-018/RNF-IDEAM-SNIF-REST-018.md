# RNF-IDEAM-SNIF-REST-018  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Consistencia visual y funcional

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario institucional.  
> **Quiero:** que la interfaz mantenga consistencia en navegación, iconografía, mensajes y comportamiento en todos los módulos.  
> **Para:** reducir la curva de aprendizaje, evitar confusiones y ejecutar tareas de forma predecible en cualquier módulo del sistema.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Consistencia de navegación

1.1 La estructura de navegación (menús, rutas, breadcrumbs si aplica) debe ser consistente en todos los módulos.  
1.2 Los patrones de ubicación de acciones (por ejemplo: Guardar, Cancelar, Volver) deben mantenerse consistentes (misma posición y etiquetas) entre pantallas equivalentes.  
1.3 Los componentes de listado (tablas) deben conservar comportamientos homogéneos: paginación, filtros, ordenamiento y acciones por fila cuando aplique.

### 2. Consistencia de iconografía y componentes UI

2.1 La iconografía usada para acciones (editar, ver, eliminar/inactivar, validar, rechazar) debe ser uniforme en todo el sistema.  
2.2 Los componentes reutilizables (botones, campos, modales, alertas) deben mantener estilos, estados y comportamientos homogéneos.  
2.3 El sistema debe evitar que la misma acción se represente con distintos nombres o íconos en módulos diferentes.

### 3. Consistencia de mensajes y retroalimentación

3.1 Los mensajes de éxito, error y advertencia deben seguir un estándar único de redacción y presentación.  
3.2 Los mensajes deben ser comprensibles, accionables y no técnicos en todos los módulos.  
3.3 Los mismos eventos (por ejemplo: guardado exitoso, validación fallida) deben mostrar mensajes equivalentes y consistentes.

### 4. Comportamiento funcional consistente

4.1 Las acciones equivalentes deben comportarse igual (por ejemplo: Guardar siempre valida, Cancelar siempre revierte cambios no guardados).  
4.2 El sistema debe aplicar las mismas reglas de validación y permisos en UI y backend de manera coherente, evitando inconsistencias entre módulos.

### 5. Evidencia de verificación

5.1 Debe existir una guía o estándar UI mínimo (design system o lineamientos) que describa navegación, iconografía y mensajes.  
5.2 Deben existir pruebas o checklist que verifiquen consistencia en al menos los módulos principales (listados, formularios, validación).  
5.3 Debe existir evidencia (capturas) de pantallas mostrando consistencia de componentes y mensajes.

---

### Resultado esperado

Interfaz consistente en navegación, iconografía, mensajes y comportamiento en todos los módulos, reduciendo confusión y mejorando la eficiencia del usuario.

---

