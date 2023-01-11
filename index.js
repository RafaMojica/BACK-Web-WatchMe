const volleyball = require("volleyball");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const db = require("./config/db");

const app = express();

//MIDDLEWARE PARSEO INFORMACION
app.use(volleyball);
app.use(express.json());
app.use(cors());

//MIDDLEWARE COOKIES
app.use(cookieParser());

//LEVANTANDO EL SERVIDOR Y DB
db.sync({ force: false }).then(() => {
  console.log("DB Conectada");
  app.listen(
    process.env.PORT,
    console.log("Escuchando en el puerto", process.env.PORT)
  );
});