const express = require('express');
const cityController = require('./cityController');

const cityRouter = express.Router();

cityRouter.route('/')
    .post(cityController.createCity)
    .get(cityController.getAllCities);

cityRouter.route('/:id')
    .get(cityController.getCityById)
    .put(cityController.updateCity)
    .delete(cityController.deleteCity);

module.exports = cityRouter;
