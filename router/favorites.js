const express = require("express");
const { addFavorite, seeFavorites, deleteFavorites } = require("../controllers/favoritesControllers");
const { addFavortitesValidation } = require("../validations/addFavorites");
const routerFavorites = express.Router();

//GUARDAR UNA PELICULA/SERIE A FAVORITO
routerFavorites.post("/add", addFavortitesValidation,  addFavorite);

//VER FAVORITOS DE UN USUARIO
routerFavorites.post("/see", seeFavorites)

//ELIMINAR UN FAVORITO DE UN USUARIO
routerFavorites.delete("/delete/:id", deleteFavorites);


module.exports = routerFavorites;