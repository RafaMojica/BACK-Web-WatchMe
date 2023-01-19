const volleyball = require("volleyball");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const db = require("./config/db");
const router = require("./router")
const models = require("./models")

const app = express();

//MIDDLEWARE PARSEO INFORMACION
app.use(volleyball);
app.use(express.json());
app.use(cors());

//MIDDLEWARE COOKIES
app.use(cookieParser());

//MIDDLEWARE RUTAS
app.use("/api", router);

//LEVANTANDO EL SERVIDOR Y DB
db.sync({ force: false }).then(() => {
  console.log("DB Conectada");
  app.listen(
    process.env.PORT,
    console.log("Escuchando en el puerto", process.env.PORT)
  );
});