const express = require("express");
const { popularSeries, selectSerie, searchSeries, similarSeries, genreSeries, topSeries } = require("../controllers/seriesControllers");
const routerSeries = express.Router();

//VER SERIES MAS POPULARES
routerSeries.get("/popular", popularSeries);

//VER SERIES SIMILARES
routerSeries.get("/similar/:id", similarSeries);

//VER SERIE SELECCIONADA
routerSeries.get("/select/:id", selectSerie);

//BUSCAR SERIES POR NOMBRE
routerSeries.get("/search/:name", searchSeries);

//GENEROS OFICIALES SERIES
routerSeries.get("/genre", genreSeries);

//VER SERIES MEJOR CALIFICADAS
routerSeries.get("/topRated", topSeries);

module.exports = routerSeries;