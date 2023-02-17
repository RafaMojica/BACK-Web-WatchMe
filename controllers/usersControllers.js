const { tokenGenerator } = require("../config/token");
const usersServices = require("../services/usersServices")

const register = async (req, res) => {
  try {
    await usersServices.register(req.body)
    res.status(201).send("Registro exitoso");
  } catch (error) {
    res.status(400).send(`${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    const payload = await usersServices.login(req.body)
    const token = tokenGenerator(payload);
    res.cookie("token", token);
    res.status(200).send(payload);
  } catch (error) {
    res.status(404).send(`${error.message}`);
  }
};

const persistence = async (req, res) => {
  try {
    const user = await usersServices.persistence(req.cookies.token)
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send(`${error.message}`);
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

const deleteUser = async(req, res) => {
  try {
    await usersServices.deleteUser(req.params.email)
    res.status(202).send("Usuario eliminado exitosamente")
  } catch (error) {
    res.status(404).send(`${error.message}`);
  }
}

module.exports = { register, login, persistence, logout, deleteUser };