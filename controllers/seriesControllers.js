const seriesServices = require("../services/seriesServices")

const popularSeries = async (req, res) => {
  try {
    const series = await seriesServices.popularSeries()
    res.status(200).send(series);
  } catch (error) {
    res.sendStatus(404);
  }
};

const similarSeries = async (req, res) => {
  try {
    const series = await seriesServices.similarSeries(req.params.id)
    res.status(200).send(series);
  } catch (error) {
    res.sendStatus(404);
  }
};

const selectSerie = async (req, res) => {
  try {
    const serie = await seriesServices.selectSerie(req.params.id)
    res.status(200).send(serie);
  } catch (error) {
    res.sendStatus(404);
  }
};

const searchSeries = async (req, res) => {
  try {
    const series = await seriesServices.searchSeries(req.params.name)
    res.status(200).send(series);
  } catch (error) {
    res.sendStatus(404);
  }
}

const genreSeries = async (req, res) => {
  try {
    const genres = await seriesServices.genreSeries()
    res.status(200).send(genres);
  } catch (error) {
    res.sendStatus(404);
  }
}

const topSeries = async (req, res) => {
  try {
    const topSeries = await seriesServices.topSeries();
    res.status(200).send(topSeries);
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = { popularSeries, selectSerie, searchSeries, similarSeries, genreSeries, topSeries };