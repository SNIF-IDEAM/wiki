# RNF-IDEAM-SNIF-REST-017  
## Épica: Requerimientos No Funcionales del Módulo de restauración  
### Usabilidad guiada

---

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario institucional (registrador, validador o consultor).  
> **Quiero:** que el sistema me guíe mediante formularios por pestañas, validaciones en tiempo real y mensajes claros de error o advertencia.  
> **Para:** reducir errores de diligenciamiento, completar tareas con mayor rapidez y asegurar la calidad de la información registrada.

---

## CRITERIOS DE ACEPTACIÓN

### 1. Formularios guiados por pestañas/pasos

1.1 Los formularios que capturen información compleja deben organizarse en **pestañas o pasos** con títulos claros (por ejemplo: Datos generales, Soportes, Validación, etc.).  
1.2 El sistema debe indicar visualmente el progreso (paso actual y pasos pendientes) y permitir navegación controlada entre pestañas.  
1.3 El sistema debe evitar el avance al siguiente paso si existen errores en campos obligatorios del paso actual, mostrando retroalimentación inmediata.

### 2. Validaciones en tiempo real

2.1 Los campos obligatorios deben validarse en tiempo real o al perder foco, indicando claramente cuando un valor es inválido.  
2.2 Las validaciones de formato (por ejemplo: fechas, numéricos, rangos) deben ejecutarse antes del guardado y mostrar mensajes accionables.  
2.3 Las validaciones de reglas (por ejemplo: unicidad o consistencia) deben informarse al usuario de manera clara y previa al guardado definitivo (cuando sea técnicamente posible).

### 3. Mensajes claros de error/advertencia

3.1 Los mensajes deben indicar **qué campo** presenta el problema y **cómo corregirlo** (evitar mensajes genéricos tipo “Error”).  
3.2 Los mensajes deben clasificarse al menos en: **Error**, **Advertencia** y **Éxito**, con comportamiento consistente.  
3.3 No se deben mostrar mensajes técnicos (stacktrace, códigos internos) al usuario final.

### 4. Prevención de pérdida de información

4.1 Si el usuario intenta salir del formulario con cambios sin guardar, el sistema debe mostrar una advertencia y permitir cancelar la salida.  
4.2 El sistema debe permitir guardar borrador o guardar parcial si la funcionalidad aplica al módulo (según diseño del sistema).

### 5. Evidencia de verificación

5.1 Deben existir casos de prueba de UX que demuestren:  
- Flujo por pestañas/pasos con control de avance.  
- Validación en tiempo real de campos obligatorios y formatos.  
- Mensajes claros y consistentes.  

5.2 Debe existir evidencia (capturas o checklist) de que los mensajes son accionables y no técnicos.

---

### Resultado esperado

Formularios guiados por pestañas/pasos con validaciones en tiempo real y mensajes claros, reduciendo errores y mejorando la experiencia de usuario sin pérdida de información.

---

