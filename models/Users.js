const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt")

//CREACION DEL MODELO USUARIOS
class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
    },
    lastname: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
    },
    password: {
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

//METODOS DE INSTACIA
User.prototype.generateHash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

User.prototype.validatePassword = function (password) {
  return this.generateHash(password, this.salt).then((hash) => hash === this.password);
};

//HOOKS
User.addHook("beforeCreate", (user, options) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.generateHash(user.password, salt).then((hast) => (user.password = hast));
});

module.exports = User;