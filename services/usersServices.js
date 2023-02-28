const { validateToken } = require("../config/token");
const { User } = require("../models");

exports.register = async (user) => {
  const { email } = user;
  const UserMatch = await User.findOne({ where: { email } });
  if (UserMatch) throw new Error("Usuario ya registrado");

  await User.create(user);
};

exports.login = async (loginData) => {
  const { email, password } = loginData;
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

  return payload;
};

exports.persistence = async (token) => {
  if (!token) throw new Error("Inicia sesion");
  
  const { user } = await validateToken(token);
  if (!user) throw new Error("Inicia sesion");

  return user;
};

exports.deleteUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Usuario no registrado");

  User.destroy({ where: { email } });
};
