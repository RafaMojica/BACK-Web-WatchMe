const axios = require("axios");

exports.popularSeries = async (page) => {
  const series = await axios.get(`${process.env.URL}/tv/popular?api_key=${process.env.KEY}&page=${page}`);
  return series.data
}

exports.selectSerie = async (id) => {
  const serie = await axios.get(`${process.env.URL}/tv/${id}?api_key=${process.env.KEY}`);
  return serie.data
}

exports.searchSeries = async (name) => {
  const series = await axios.get(`${process.env.URL}/search/tv?api_key=${process.env.KEY}&query=${name}`)
  return series.data
}

exports.genreSeries = async () => {
  const genres = await axios.get(`${process.env.URL}/genre/tv/list?api_key=${process.env.KEY}`)
  return genres.data
}

exports.topSeries = async () => {
  const topSeries = await axios.get(`${process.env.URL}/tv/top_rated?api_key=${process.env.KEY}`)
  return topSeries.data
};