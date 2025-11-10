[Inicio](/README.md)

# Arquitectura de software

## Visión general

La arquitectura del **Sistema de Información Geográfica (SIG) del SNIF** se fundamenta en un modelo **cliente-servidor modular**, que integra componentes geográficos, servicios API REST y bases de datos espaciales.  
Su diseño busca garantizar **escalabilidad, mantenibilidad y seguridad**, permitiendo la interoperabilidad entre los distintos módulos del sistema.

## Componentes principales

- **Frontend:** Angular + ArcGIS API for Javascript.
- **Backend:** Node.js / NestJS.
- **Base de datos:** Alfanúmerica: PostgreSQL, Geográfica: PostgreSQL + SDE.
- **Servicios geográficos:** ArcGIS Server.
- **Autenticación:** Keycloak.

## Consideraciones técnicas

- Escalabilidad horizontal de servicios.
- Autenticación y autorización con roles.
- Comunicación segura mediante **HTTPS** y **JWT**.
- Integración de servicios RESTful y geoespaciales.
- Despliegue en contenedores Docker y entornos virtualizados.

---

## Modelo C4 (hasta Nivel 3)

A continuación se documenta el **modelo C4** del sistema, desglosado en tres niveles (Contexto, Contenedores, Componentes).

> [Nivel 1 — Contexto (System Context)](content/arquitectura_software/c4/nivel1.md)
>
> [Nivel 2 — Contenedores (Containers)](content/arquitectura_software/c4/nivel2.md)
>
> [Nivel 3 — Componentes (Components)](content/arquitectura_software/c4/nivel3.md)

## Enlaces relacionados

- [Historias de usuario](content/historias_usuario/)
- [Casos de prueba](casos_prueba/)
