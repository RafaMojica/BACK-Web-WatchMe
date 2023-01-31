const express = require("express");
const routerUsers = express.Router();
const { register, login, persistence, logout, deleteUser } = require("../controllers/usersControllers");

//CREACION DE USUARIO
routerUsers.post("/register", register);

//INICIO DE SESION
routerUsers.post("/login", login)

//PERSISTENCIA DE SESION
routerUsers.get("/me", persistence)

//CERRAR SESION
routerUsers.get("/logout", logout)

//ELIMINAR PERFIL USUARIO
routerUsers.delete("/delete/:email", deleteUser)

module.exports = routerUsers;