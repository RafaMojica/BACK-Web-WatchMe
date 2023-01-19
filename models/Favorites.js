const S = require("sequelize");
const db = require("../db");

//CREACION DEL MODELO FAVORITOS
class Favorite extends S.Model {}

Favorite.init(
  {
    movieId: {
      type: S.INTEGER,
    },
    backdrop_path: {
      type: S.STRING,
    },
    poster_path: {
      type: S.STRING,
    },
    title: {
      type: S.STRING,
    },
    overview: {
      type: S.TEXT,
    },
    vote_average: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorite;