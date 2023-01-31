const { Favorite, User } = require("../models");

const addFavorite = async (req, res) => {
  try {
    const { movie, email } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Inicia sesion para agregar a favoritos");

    const newFavorite = await Favorite.create({
      movieId: movie.id,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      title: movie.title || movie.name,
      overview: movie.overview,
      vote_average: movie.vote_average,
    });

    user.addFavorite(newFavorite)
    res.status(200).send("Agregado con exito a favoritos")
  } catch (error) {
    res.send(error);
  }
};

const seeFavorites = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({where: { email }, include: { model: Favorite }})
        res.status(200).send(user.dataValues.favorites)
    } catch (error) {
      res.send(error);
    }
}

const deleteFavorites = async(req, res) => {
    try {
        const id = req.params.id
        Favorite.destroy({where: {id}})
        res.status(202).send("Favorito eliminado exitosamente")
    } catch (error) {
      res.send(error);
    }
}

module.exports = { addFavorite, seeFavorites, deleteFavorites };
