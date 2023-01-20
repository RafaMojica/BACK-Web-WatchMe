const { tokenGenerator, validateToken } = require("../config/token");
const { User } = require("../models");

const register = async (req, res) => {
  try {
    const { email } = req.body;
    const UserMatch = await User.findOne({ where: { email } });
    if (UserMatch) throw new Error("Usuario ya registrado");

    await User.create(req.body);
    res.status(201).send("Registro exitoso");
  } catch (error) {
    res.status(400).send(`${error.name}: ${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Usuario no registrado");

    const validatePassword = await user.validatePassword(password);
    if (!validatePassword) throw new Error("Contraseña incorrecta");

    const payload = {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    };

    const token = tokenGenerator(payload);
    res.cookie("token", token);
    res.status(200).send(payload);
  } catch (error) {
    res.status(400).send(`${error.name}: ${error.message}`);
  }
};

const persistence = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error("Inicia sesion");

    const { user } = validateToken(token);
    if (!user) throw new Error("Inicia sesion");
    
    res.send(user);
  } catch (error) {
    res.status(401).send(`${error.name}: ${error.message}`);
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

module.exports = { register, login, persistence, logout };