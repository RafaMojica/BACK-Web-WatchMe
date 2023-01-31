const axios = require("axios");

const popularMovies = async (req, res) => {
  try {
    movies = await axios.get(`${process.env.URL}/movie/popular?api_key=${process.env.KEY}`);
    res.status(200).send(movies.data);
  } catch (error) {
    res.sendStatus(404);
  }
};

const similarMovies = async (req, res) => {
  try {
    const id = req.params.id;

    movies = await axios.get(`${process.env.URL}/movie/${id}/similar?api_key=${process.env.KEY}`);
    res.status(200).send(movies.data);
  } catch (error) {
    res.sendStatus(404);
  }
};

const selectMovie = async (req, res) => {
  try {
    const id = req.params.id;

    movie = await axios.get(`${process.env.URL}/movie/${id}?api_key=${process.env.KEY}`);
    res.status(200).send(movie.data);
  } catch (error) {
    res.sendStatus(404);
  }
};

const serchMovies = async (req, res) => {
  try {
    const name = req.params.name

    movies = await axios.get(`${process.env.URL}/search/movie?api_key=${process.env.KEY}&query=${name}`)
    res.status(200).send(movies.data);
  } catch (error) {
    res.sendStatus(404);
  }
}

const genreMovies = async (req, res) => {
  try {
    genres = await axios.get(`${process.env.URL}/genre/movie/list?api_key=${process.env.KEY}`)
    res.status(200).send(genres.data);
  } catch (error) {
    res.sendStatus(404);
  }
}

module.exports = { popularMovies, selectMovie, serchMovies, similarMovies, genreMovies };
