const { check } = require("express-validator");
const { result } = require("../middleware/validationResult");

const addFavortitesValidation = [
  check("email")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .rtrim().ltrim()
    .isEmail()
    .withMessage("El email no es valido"),
  check("movie")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido"),
  (req, res, next) => {
    result(req, res, next)
  }
];

module.exports = { addFavortitesValidation };