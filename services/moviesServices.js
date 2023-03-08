const axios = require("axios");

exports.popularMovies = async (page) => {
  const movies = await axios.get(`${process.env.URL}/movie/popular?api_key=${process.env.KEY}&page=${page}`);
  return movies.data
};

exports.selectMovie = async (id) => {
  const movie = await axios.get(`${process.env.URL}/movie/${id}?api_key=${process.env.KEY}`);
  return movie.data
};

exports.searchMovies = async (name) => {
  const movies = await axios.get(`${process.env.URL}/search/movie?api_key=${process.env.KEY}&query=${name}`)
  return movies.data
};

exports.genreMovies = async () => {
  const genres = await axios.get(`${process.env.URL}/genre/movie/list?api_key=${process.env.KEY}`)
  return genres.data
};

exports.topMovies = async () => {
  const topMovies = await axios.get(`${process.env.URL}/movie/top_rated?api_key=${process.env.KEY}`)
  return topMovies.data
};
