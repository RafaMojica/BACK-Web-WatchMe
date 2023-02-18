const express = require("express");
const { addFavorite, seeFavorites, deleteFavorites } = require("../controllers/favoritesControllers");
const routerFavorites = express.Router();

//GUARDAR UNA PELICULA/SERIE A FAVORITO
routerFavorites.post("/add", addFavorite);

//VER FAVORITOS DE UN USUARIO
routerFavorites.post("/see", seeFavorites)

//ELIMINAR UN FAVORITO DE UN USUARIO
routerFavorites.delete("/delete/:id", deleteFavorites);


module.exports = routerFavorites;