const asyncHandler = require('express-async-handler');
const cityValidator = require('./cityValidator');
const cityServices = require('./cityService');
const {
    BAD_REQUEST,
    CREATED,
    OK,
    NOT_FOUND,
} = require('../../constants/responseStatusCodes');
const sendResponse = require('../../utils/sendResponse');

const cityController = {
    createCity: asyncHandler(async (req, res) => {
        const validationResult = cityValidator.createCity.validate(req.body);
        if (validationResult.error) {
            return sendResponse(res, BAD_REQUEST, validationResult.error.details[0].message);
        }

        const newCity = await cityServices.createCity(req.body);
        return sendResponse(res, CREATED, 'City created successfully', newCity);
    }),

    getAllCities: asyncHandler(async (req, res) => {
        const cities = await cityServices.getAllCities();
        return sendResponse(res, OK, 'Cities retrieved successfully', cities);
    }),

    getCityById: asyncHandler(async (req, res) => {
        const city = await cityServices.getCityById(req.params.id);
        if (!city) {
            return sendResponse(res, NOT_FOUND, 'City not found');
        }
        return sendResponse(res, OK, 'City retrieved successfully', city);
    }),

    updateCity: asyncHandler(async (req, res) => {
        const city = await cityServices.updateCity(req.params.id, req.body);
        if (!city) {
            return sendResponse(res, NOT_FOUND, 'City not found');
        }
        return sendResponse(res, OK, 'City updated successfully', city);
    }),

    deleteCity: asyncHandler(async (req, res) => {
        const city = await cityServices.deleteCity(req.params.id);
        if (!city) {
            return sendResponse(res, NOT_FOUND, 'City not found');
        }
        return sendResponse(res, OK, 'City deleted successfully');
    }),
};

module.exports = cityController;
