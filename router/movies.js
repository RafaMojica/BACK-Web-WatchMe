const express = require("express");
const { popularMovies, selectMovie, searchMovies, similarMovies, genreMovies, topMovies } = require("../controllers/moviesControllers");
const routerMovies = express.Router();

//VER PELICULAS MAS POPULARES
routerMovies.get("/popular/:page", popularMovies);

//VER PELICULA SELECCIONADA
routerMovies.get("/select/:id", selectMovie);

//BUSCAR PELICULA POR NOMBRE
routerMovies.get("/search/:name", searchMovies);

//GENEROS OFICIALES PELICULAS
routerMovies.get("/genre", genreMovies);

//VER PELICULA MEJOR CALIFICADAS
routerMovies.get("/topRated", topMovies);

module.exports = routerMovies;
