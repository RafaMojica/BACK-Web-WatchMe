const express = require("express");
const { popularMovies, selectMovie, serchMovies, similarMovies, genreMovies } = require("../controllers/moviesControllers");
const routerMovies = express.Router();

//VER PELICULAS MAS POPULARES
routerMovies.get("/popular", popularMovies);

//VER PELICULAS SIMILARES
routerMovies.get("/similar/:id", similarMovies);

//VER PELICULA SELECCIONADA
routerMovies.get("/select/:id", selectMovie);

//BUSCAR PELICULA POR NOMBRE
routerMovies.get("/search/:name", serchMovies);

//GENEROS OFICIALES PELICULAS
routerMovies.get("/genre", genreMovies);

module.exports = routerMovies;
