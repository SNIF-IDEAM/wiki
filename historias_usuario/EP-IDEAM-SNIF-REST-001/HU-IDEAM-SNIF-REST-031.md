# HU-IDEAM-SNIF-REST-031

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-031\
> **Nombre Historia de Usuario:** Página de selección de módulos del SNIF

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** usuario autenticado o invitado.\
> **Quiero:** seleccionar la aplicación del Módulo de Restauración a la que puedo acceder.\
> **Para:** ingresar únicamente a las funcionalidades permitidas según mi perfil.

## CRITERIOS DE ACEPTACIÓN

1. **Aplicaciones disponibles**  
   1.1 El sistema presenta las siguientes aplicaciones:  
   - Visor geográfico.  
   - Gestión.  
   - Administración.

2. **Validaciones por perfil**  
   2.1 **Administrador IDEAM:**  
   - Visualiza las tres aplicaciones (Visor, Gestión, Administración).  
   2.2 **Registrador:**  
   - Visualiza Visor geográfico y Gestión.  
   2.3 **Invitado:**  
   - Visualiza únicamente Visor geográfico.

3. **Reglas de restricción**  
   3.1 Las aplicaciones no autorizadas:  
   - No se muestran en la interfaz.  
   - O se muestran deshabilitadas con mensaje informativo claro.  
   3.2 El acceso directo por URL a aplicaciones no permitidas:  
   - Es bloqueado por el sistema.  
   - Se redirige a una vista autorizada o página de error.

4. **UX esperado**  
   4.1 Diseño tipo tarjetas institucionales con identidad visual IDEAM-SNIF.  
   4.2 Cada aplicación incluye:  
   - Ícono distintivo.  
   - Nombre de la aplicación.  
   - Descripción corta del alcance.  
   4.3 Indicador visible del perfil activo del usuario.  
   4.4 Transición fluida al hacer clic en una aplicación habilitada.

5. **Accesibilidad y usabilidad**  
   5.1 La interfaz debe ser responsiva y accesible.  
   5.2 Las tarjetas deshabilitadas deben tener indicador visual claro.

## ROLES

- **Administrador IDEAM:** Visualiza y accede a todas las aplicaciones (Visor, Gestión, Administración).

- **Registrador:** Visualiza y accede a Visor geográfico y Gestión.

- **Usuario Consulta / Invitado:** Visualiza y accede únicamente al Visor geográfico.

## RESTRICCIONES Y LÍMITES

- Las aplicaciones no autorizadas no pueden ser accedidas por ningún medio (UI, URL, API).
- El diseño debe respetar la identidad visual institucional.
- La validación de permisos debe ser en tiempo real al cargar la página.
- Los cambios en permisos requieren nueva autenticación para reflejarse.

