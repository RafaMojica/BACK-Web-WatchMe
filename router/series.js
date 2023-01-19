const express = require("express");
const routerSeries = express.Router();
const axios = require("axios");

//VER SERIES MAS POPULARES
routerSeries.get("/popular");

//VER SERIE SELECCIONADA
routerSeries.get("/select");

//BUSCAR SERIES
routerSeries.get("/search");

module.exports = routerSeries;