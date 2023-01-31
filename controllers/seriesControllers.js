const axios = require("axios");

const popularSeries = async (req, res) => {
  try {
    series = await axios.get(`${process.env.URL}/tv/popular?api_key=${process.env.KEY}`);
    res.status(200).send(series.data);
  } catch (error) {
    res.sendStatus(404);
  }
};

const similarSeries = async (req, res) => {
  try {
    const id = req.params.id;

    series = await axios.get(`${process.env.URL}/tv/${id}/similar?api_key=${process.env.KEY}`);
    res.status(200).send(series.data);
  } catch (error) {
    res.sendStatus(404);
  }
};

const selectSerie = async (req, res) => {
  try {
    const id = req.params.id;

    serie = await axios.get(`${process.env.URL}/tv/${id}?api_key=${process.env.KEY}`);
    res.status(200).send(serie.data);
  } catch (error) {
    res.sendStatus(404);
  }
};

const serchSeries = async (req, res) => {
  try {
    const name = req.params.name

    series = await axios.get(`${process.env.URL}/search/tv?api_key=${process.env.KEY}&query=${name}`)
    res.status(200).send(series.data);
  } catch (error) {
    res.sendStatus(404);
  }
}

const genreSeries = async (req, res) => {
  try {
    genres = await axios.get(`${process.env.URL}/genre/tv/list?api_key=${process.env.KEY}`)
    res.status(200).send(genres.data);
  } catch (error) {
    res.sendStatus(404);
  }
}

module.exports = { popularSeries, selectSerie, serchSeries, similarSeries, genreSeries };