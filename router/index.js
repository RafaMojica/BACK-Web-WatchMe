const express = require("express");
const router = express.Router();
const routerFavorites = require("./favorites");
const routerMovies = require("./movies");
const routerSeries = require("./series");
const routerUsers = require("./users");

//RUTAS
router.use("/movies", routerMovies);
router.use("/users", routerUsers);
router.use("/series", routerSeries);
router.use("/favorites", routerFavorites);

module.exports = router;
