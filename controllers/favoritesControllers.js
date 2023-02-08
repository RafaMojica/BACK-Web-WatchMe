const favoritesServices = require("../services/favoritesServices");

const addFavorite = async (req, res) => {
  try {
    await favoritesServices.addFavorite(req.body);
    res.status(200).send("Agregado con exito a favoritos");
  } catch (error) {
    res.status(401).send(`${error.name}: ${error.message}`);
  }
};

const seeFavorites = async (req, res) => {
  try {
    const favorites = await favoritesServices.seeFavorites(req.body);
    res.status(200).send(favorites);
  } catch (error) {
    res.status(401).send(`${error.name}: ${error.message}`);
  }
};

const deleteFavorites = async (req, res) => {
  try {
    await favoritesServices.deleteFavorites(req.params.id);
    res.status(202).send("Favorito eliminado exitosamente");
  } catch (error) {
    res.status(404).send(`${error.name}: ${error.message}`);
  }
};

module.exports = { addFavorite, seeFavorites, deleteFavorites };
