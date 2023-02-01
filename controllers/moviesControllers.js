const moviesServices = require("../services/moviesServices");

const popularMovies = async (req, res) => {
  try {
    const movies = await moviesServices.popularMovies();
    res.status(200).send(movies);
  } catch (error) {
    res.sendStatus(404);
  }
};

const similarMovies = async (req, res) => {
  try {
    const movies = await moviesServices.similarMovies(req.params.id);
    res.status(200).send(movies);
  } catch (error) {
    res.sendStatus(404);
  }
};

const selectMovie = async (req, res) => {
  try {
    const movie = await moviesServices.selectMovie(req.params.id);
    res.status(200).send(movie);
  } catch (error) {
    res.sendStatus(404);
  }
};

const searchMovies = async (req, res) => {
  try {
    const movies = await moviesServices.searchMovies(req.params.name);
    res.status(200).send(movies);
  } catch (error) {
    res.sendStatus(404);
  }
};

const genreMovies = async (req, res) => {
  try {
    const genres = await moviesServices.genreMovies();
    res.status(200).send(genres);
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = { popularMovies, selectMovie, searchMovies, similarMovies, genreMovies };
