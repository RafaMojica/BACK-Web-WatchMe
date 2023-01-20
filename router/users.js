const express = require("express");
const routerUsers = express.Router();
const { register, login, persistence, logout } = require("../controllers/usersControllers");

//CREACION DE USUARIO
routerUsers.post("/register", register);

//INICIO DE SESION
routerUsers.post("/login", login)

//PERSISTENCIA DE SESION
routerUsers.get("/me", persistence)

//CERRAR SESION
routerUsers.get("/LOGOUT", logout)

module.exports = routerUsers;