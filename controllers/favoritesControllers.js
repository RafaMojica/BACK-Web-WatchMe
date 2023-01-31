const { Favorite, User } = require("../models");

const addFavorite = async (req, res) => {
  try {
    const { movie, email } = req.body;

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
    res.status(200).send("Agregado con exito a favoritos")
  } catch (error) {
    res.status(401).send(`${error.name}: ${error.message}`);
  }
};

const seeFavorites = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({where: { email }, include: { model: Favorite }})
        if (!user) throw new Error("Inicia sesion para ver tus favoritos");
        res.status(200).send(user.dataValues.favorites)
    } catch (error) {
      res.status(401).send(`${error.name}: ${error.message}`);
    }
}

const deleteFavorites = async(req, res) => {
    try {
        const id = req.params.id
        const favorite = await Favorite.findOne({ where: { id } });
        if (!favorite) throw new Error("No se encontro la información");

        Favorite.destroy({where: {id}})
        res.status(202).send("Favorito eliminado exitosamente")
    } catch (error) {
      res.status(404).send(`${error.name}: ${error.message}`);
    }
}

module.exports = { addFavorite, seeFavorites, deleteFavorites };
