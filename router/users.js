const express = require("express");
const routerUsers = express.Router();
const { register, login, persistence, logout, deleteUser } = require("../controllers/usersControllers");
const { loginValidation } = require("../validations/login");
const { registerValidation } = require("../validations/register");

//CREACION DE USUARIO
routerUsers.post("/register",registerValidation , register);

//INICIO DE SESION
routerUsers.post("/login",loginValidation, login)

//PERSISTENCIA DE SESION
routerUsers.get("/me", persistence)

//CERRAR SESION
routerUsers.get("/logout", logout)

//ELIMINAR PERFIL USUARIO
routerUsers.delete("/delete/:email", deleteUser)

module.exports = routerUsers;