<a name="inicio"></a>

<!-- INTRODUCCIÓN -->

<div align="center">
  <a href="https://github.com/RafaMojica/BACK-Web-WatchMe">
    <img src="utils/logoWatchMe.png" alt="Logo" width="400">
  </a>

  <p align="center">
    <h3 align="center">API WATCH ME - BACKEND</h3>
    <a href="#"><strong>Ver la página Web »</strong></a>
    <br />
    <a href="https://github.com/RafaMojica/BACK-Web-WatchMe"><strong>Ver el repositorio »</strong></a>
    <br />
    <a href="#"><strong>Ver el repositorio Frontend »</strong></a>
    <br />
  </p>
</div>




<!-- TABLA DE CONTENIDO -->

## Tabla de contenido

<ol>
  <li>
    <a href="#descripción-del-proyecto">Descripción del Proyecto</a>
    <ul>
      <li><a href="#tecnologias-utilizadas">Tecnologías utilizadas</a></li>
    </ul>
  </li>
  <li>
    <a href="#cómo-empezar">Cómo Empezar</a>
    <ul>
      <li><a href="#pre-requisitos">Pre-requisitos previos</a></li>
      <li><a href="#instalación">Instalación</a></li>
    </ul>
  </li>
  <li><a href="#documentación-api">Documentación API</a></li>
  <li><a href="#funcionalidades">Funcionalidades</a></li>
  <li><a href="#como-contribuir">Como contribuir</a></li>
  <li><a href="#contacto">Contacto</a></li>
</ol>




<!-- ACERCA DEL PROYECTO -->

## Descripción del proyecto

Sitio Web que permite al usuario ver descripciones de películas y series de televisión consumiendo la información de la API <a href="https://www.themoviedb.org/?language=es">The Movie Database - TMDB</a>, además el usuario puede registrarse para así poder empezar a crear su propia lista de favoritos con toda la información de cada película o serie.

### Tecnologías utilizadas

|                |                |
|:--------------:|:--------------:|
|  NodeJS        |  Jsonwebtoken  |
|  Sequelize     |  Cookie-parser |
|  PostgresSQL   |  Bcrypt        | 
|  Express       |  Dotenv        |
|  Cors          |  Nodemon       |
|  Axios         |  Voleyball     | 
|                |                | 

<p align="right"><a href="#inicio">⬆ Volver al inicio</a></p>




<!-- CÓMO EMPEZAR -->

## Cómo Empezar

Actualmente la base de datos es totalmente local. Por lo tanto, deberás seguir estas instrucciones para compilar el proyecto de back-end, a continuación debes cumplir con los siguientes requisitos para poder utilizar este proyecto.

### Pre-requisitos

- DB: Crea la base de datos usando PSQL
  ```sh
  createdb "Nombre base de dato"
  ```

### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/RafaMojica/BACK-Web-WatchMe.git
   ```
2. Instala las dependencias NPM
   ```sh
   npm install
   ```
3. Crea un archivo en el root __.env__ después usa como base el archivo __.env.example__ que se encuentra en este repositorio
   ```sh
    #CONFIGURACIONES GENERALES
    SERVIDOR="localhost"
    PORT="puerto que desea utilizar"

    #CONFIGURACION BASE DE DATOS
    DB="postgres"
    DB_NAME="Nombre de la base de datos creada en el pre-requisito"
    DB_USER="usuario de su cuenta postgres"
    DB_PASS="contraseña de la cuenta"

    #CONFIGURACION TOKEN JWT
    SECRET="Palabra que desea utilizar para encriptar las contraseñas"

    #API TMD
    KEY="Key que suministra la API al registrarse en la página web"
    URL="https://api.themoviedb.org/3"
    URL_IMG="https://image.tmdb.org/t/p"
   ```
4. Corre el servidor
   ```sh
   npm start
   ```

<p align="right"><a href="#inicio">⬆ Volver al inicio</a></p>




<!-- API  -->

## Documentación API

<p align="center"><img src="https://cdn.shopify.com/s/files/1/0057/5668/2355/files/Postman-logo-orange-2021_1155x.png?v=1637252529" alt="Logo" width="40%"></p>

Puedes encontrar a continuación la documentación detallada de todos los métodos de la API: <a href="#" target="_blank">Documentación API</a>

<p align="right"><a href="#inicio">⬆ Volver al inicio</a></p>




<!-- FUNCIONALIDADES -->

## Funcionalidades

- [x] 🔹 Features for all users
  - [x] Sign up
  - [x] Login/Logout
  - [x] Session persistence
  - [x] My User profile
  - [x] User's profile
  - [x] Search Movie
  - [x] Search TV Show
  - [x] Search User
  - [x] Favorites list: Create, Share, Delete
  - [x] Movie details
  - [x] TV Show details
  - [x] Movie Genres
  - [x] TV Show Genres
- [x] 🔹 Admin features
  - [x] Delete users
  - [x] Change roles
  - [x] Change index carrousel
- [x] 🔹 Additional features
  - [x] Recommendations: TV Shows or Movies based on user preferences
  - [x] Surprise me: Randomly choose a tv show or movie
  - [x] Backend monitoring
  - [x] Email service

<p align="right"><a href="#inicio">⬆ Volver al inicio</a></p>




<!-- APORTES -->

## Como contribuir

<p>¡Las contribuciones de la comunidad Dev nos ayudan a aprender, inspirarnos y crear cosas nuevas ¡Todas las contribuciones son bienvenidas!</p>
<p>Si tienes alguna sugerencia para mejorar el proyecto, por favor realiza un fork del repositorio y crea un pull request</p>

1. Realiza un __Fork__ al proyecto
2. Crea tu rama de desarrollo (`git checkout -b feature/"Nombre de la rama"`)
3. Realiza un commit de los cambios (`git commit -m 'Nombre del commit'`)
4. Realiza un push de la rama (`git push origin feature/"nombre de la rama"`)
5. Abre un Pull Request

<p align="right"><a href="#inicio">⬆ Volver al inicio</a></p>




<!-- CONTACTO -->

## Contacto

 <p align="left">
 <a href="rafael.mojica27@gmail.com">
         <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-rafael.mojica27@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
       <a href="https://www.linkedin.com/in/rafamojica/">
         <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkeding-blue?style=for-the-badge&logoColor=white&logo=portafolio"/></a>
      <a href="https://www.linkedin.com/in/rafamojica/">
         <img alt="Portafolio" title="portafolio" src="https://custom-icon-badges.demolab.com/badge/-Portafolio-teal?style=for-the-badge&logo=repo-template&logoColor=white"/></a>
       <a href="https://www.linkedin.com/in/rafamojica/">
         <img alt="CV" title="Mira mi CV" src="https://custom-icon-badges.demolab.com/badge/-CV-F25278?style=for-the-badge&logo=download&logoColor=white"/></a>
        <a href="https://github.com/RafaMojica?tab=repositories">
         <img alt="Repositorios" title="Mira mis repositorios" src="https://custom-icon-badges.demolab.com/badge/-Repositorios-orange?style=for-the-badge&logoColor=white&logo=repo"/></a>
   </p>

Link Proyecto: [https://github.com/RafaMojica/BACK-Web-WatchMe](https://github.com/RafaMojica/BACK-Web-WatchMe)

<p align="right"><a href="#inicio">⬆ Volver al inicio</a></p>
