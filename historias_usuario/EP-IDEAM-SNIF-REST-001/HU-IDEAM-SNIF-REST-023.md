# HU-IDEAM-SNIF-REST-023

> **Identificador Historia de Usuario:** hu-ideam-snif-rest-023\
> **Nombre Historia de Usuario:** Acceso como usuario invitado

> **Sistema de información:** Sistema Nacional de Información Forestal\
> **Módulo / subsistema:** Módulo de restauración\
> **Validador temático(s):** Raymond Alexander Jiménez Arteaga

## DESCRIPCIÓN HISTORIA DE USUARIO

> **Como:** ciudadano o usuario externo.\
> **Quiero:** ingresar como invitado.\
> **Para:** consultar información pública validada sin necesidad de autenticación.

## CRITERIOS DE ACEPTACIÓN

1. **Validaciones y restricciones**  
   1.1 Acceso únicamente en modo consulta.  
   1.2 Visualiza solo:  
   - Proyectos validados por el IDEAM.  
   - Capas y reportes públicos.  
   1.3 No puede:  
   - Crear información.  
   - Editar información.  
   - Acceder a módulos o funcionalidades restringidas.

2. **UX esperado**  
   2.1 Opción visible: "Ingresar como invitado" en la pantalla inicial.  
   2.2 Indicador visual persistente de sesión Invitado.

3. **Auditoría**  
   3.1 Evento: Acceso como invitado.  
   3.2 Datos registrados:  
   - Tipo de sesión.  
   - Fecha y hora.

## ROLES

- **Usuario Invitado:** Acceso de solo consulta a información pública validada.

## RESTRICCIONES Y LÍMITES

- Solo modo consulta.
- Sin capacidad de crear o editar información.
- Acceso restringido a módulos y funcionalidades públicas.
- Todos los accesos como invitado se auditan.
