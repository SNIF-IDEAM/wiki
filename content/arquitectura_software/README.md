[Inicio](/README.md)

# Arquitectura de software

## Visión general

La arquitectura del SIG del SNIF se basa en un modelo cliente-servidor modular que integra componentes geográficos, API REST y bases de datos espaciales.

## Componentes principales

- **Frontend:** Angular + Leaflet + Tailwind.
- **Backend:** Node.js / Express.
- **Base de datos:** PostgreSQL + PostGIS.
- **Servicios geográficos:** ArcGIS Server.
- **Infraestructura:** Servidores Linux / Docker.

## Diagrama de arquitectura

> Incluir imagen o enlace al diagrama (`/assets/arquitectura_snif.png`)

## Consideraciones

- Escalabilidad horizontal de servicios.
- Autenticación y autorización basada en roles.
- Conexión segura mediante HTTPS y JWT.

## Enlaces

- [Historias de usuario](historias_usuario/)
- [Casos de prueba](casos_prueba/)
