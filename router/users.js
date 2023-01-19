const express = require("express");
const routerUsers = express.Router();
const axios = require("axios");

//CREACION DE USUARIO
routerUsers.post("/register");

//INICIO DE SESION
routerUsers.post("/login")

//PERSISTENCIA DE SESION
routerUsers.get("/me")

//CERRAR SESION
routerUsers.get("/LOGOUT")

module.exports = routerUsers;