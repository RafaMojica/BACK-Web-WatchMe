const { check } = require("express-validator");
const { result } = require("../middleware/validationResult");

const registerValidation = [
  check("name")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .trim()
    .isAlpha('en-US', {ignore: '\s'})
    .withMessage("El campo debe tener contener solo letras"),
  check("lastname")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .isAlpha('en-US', {ignore: '\s'})
    .withMessage("El campo debe tener contener solo letras"),
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
  check("password")
    .exists()
    .withMessage("El campo debe existir")
    .not()
    .isEmpty()
    .withMessage("El campo no puede estar vacio")
    .contains()
    .withMessage("El campo debe tener contenido")
    .rtrim().ltrim()
    .isLength({ min: 8 })
    .withMessage("El campo debe tener minimo 8 caracteres")
    .isStrongPassword()
    .withMessage("El campo debe tener 1 letra en mayuscula, 1 letra en minuscula, 1 numero, 1 simbolo"),
  (req, res, next) => {
    result(req, res, next)
  }
];

module.exports = { registerValidation };