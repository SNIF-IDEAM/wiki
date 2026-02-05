# HU-IDEAM-SNIF-REST-215

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-215\
> **Nombre Historia de Usuario:** Visualización jerárquica del catálogo taxonómico

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario administrador.\
> **Quiero:** visualizar el catálogo taxonómico de forma jerárquica.\
> **Para:** comprender y analizar claramente la relación taxonómica entre reinos, filum, familias, géneros y especies.

## CRITERIOS DE ACEPTACIÓN

1. **Vista jerárquica del catálogo**\
1.1 El sistema debe presentar el catálogo taxonómico en una vista tipo árbol.\
1.2 La jerarquía debe respetar estrictamente el orden:

- Reino → Filum → Familia → Género → Especie.

2. Visualización de estados**\
2.1 Cada nodo del árbol debe mostrar visualmente su estado (activo / inactivo).\
2.2 Los estados deben diferenciarse claramente mediante iconografía o estilo visual.

3. **Acciones contextuales por nivel**\
3.1 El sistema debe habilitar acciones contextuales según el nivel taxonómico seleccionado.\
3.2 Las acciones disponibles deben corresponder a los permisos del rol del usuario.\
3.3 Las acciones pueden incluir, según el nivel y rol:

- Crear
- Editar
- Activar / desactivar

4. **Navegación y usabilidad**\
4.1 El usuario debe poder expandir y contraer nodos del árbol.\
4.2 La vista debe permitir localizar fácilmente elementos dentro de la jerarquía.

5. **Integridad de la información**\
5.1 La vista jerárquica debe reflejar en tiempo real el estado actual del catálogo.\
5.2 No se debe permitir la modificación directa de la jerarquía si existen restricciones definidas en otras HU.

## ROLES

- **Administrador IDEAM**:	Puede visualizar y ejecutar acciones contextuales según su perfil.
- **Registrador**:	Puede visualizar la jerarquía taxonómica.
- **Consulta**:	Puede visualizar la jerarquía taxonómica.

## RESTRICCIONES Y LÍMITES

- La jerarquía taxonómica es estricta y no editable desde la vista jerárquica.
- La visualización debe respetar los estados activos e inactivos.
- No se permite eliminar elementos desde la vista jerárquica.
- Las acciones disponibles están condicionadas por rol y reglas de negocio.
- La vista es solo de visualización para roles no administradores.

## DIAGRAMA DE FLUJO DEL PROCESO

![IMAGEN FLUJO DE ACTIVIDADES](/content/historias_usuario/EP-IDEAM-SNIF-REST-020/assets/actividades-hu-ideam-snif-rest-215.png)