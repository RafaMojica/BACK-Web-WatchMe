const { Favorite, User } = require("../models");

exports.addFavorite = async (favoriteData) => {
  const { movie, email } = favoriteData;

  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Inicia sesion para agregar a favoritos");

  const newFavorite = await Favorite.create({
    movieId: movie.movieId,
    backdrop_path: movie.backdrop_path,
    poster_path: movie.poster_path,
    title: movie.title || movie.name,
    overview: movie.overview,
    vote_average: movie.vote_average,
  });

  user.addFavorite(newFavorite)
}

exports.seeFavorites = async (userData) => {
  const { email } = userData;

  const user = await User.findOne({where: { email }, include: { model: Favorite }})
  if (!user) throw new Error("Inicia sesion para ver tus favoritos");
  return user.dataValues.favorites
}

exports.deleteFavorites = async (id) => {
  const favorite = await Favorite.findOne({ where: { id } });
  if (!favorite) throw new Error("No se encontro la información");

  Favorite.destroy({where: {id}})
}
