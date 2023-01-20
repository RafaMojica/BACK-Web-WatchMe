const express = require("express");
const routerMovies = express.Router();

//VER PELICULAS MAS POPULARES
routerMovies.get("/popular");

//VER PELICULA SELECCIONADA
routerMovies.get("/select");

//BUSCAR PELICULA
routerMovies.get("/search");

module.exports = routerMovies;
