const express = require("express");
const routerFavorites = express.Router();
const axios = require("axios");

//GUARDAR UN FAVORITO
routerFavorites.post("/add");

//ELIMINAR UN FAVORITO
routerFavorites.get("/delete");

//VER FAVORITOS
routerFavorites.get("/see")

module.exports = routerFavorites;