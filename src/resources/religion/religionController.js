const asyncHandler = require('express-async-handler');
const religionValidator = require('./religionValidator');
const religionServices = require('./religionService');
const {
    BAD_REQUEST,
    CREATED,
    OK,
    NOT_FOUND,
} = require('../../constants/responseStatusCodes');
const sendResponse = require('../../utils/sendResponse');

const religionController = {
    createReligion: asyncHandler(async (req, res) => {
        const validationResult = religionValidator.createReligion.validate(req.body);
        if (validationResult.error) {
            return sendResponse(res, BAD_REQUEST, validationResult.error.details[0].message);
        }

        const newReligion = await religionServices.createReligion(req.body);
        return sendResponse(res, CREATED, 'Religion created successfully', newReligion);
    }),

    getAllReligions: asyncHandler(async (req, res) => {
        const religions = await religionServices.getAllReligions();
        return sendResponse(res, OK, 'Religions retrieved successfully', religions);
    }),

    getReligionById: asyncHandler(async (req, res) => {
        const religion = await religionServices.getReligionById(req.params.id);
        if (!religion) {
            return sendResponse(res, NOT_FOUND, 'Religion not found');
        }
        return sendResponse(res, OK, 'Religion retrieved successfully', religion);
    }),

    updateReligion: asyncHandler(async (req, res) => {
        const religion = await religionServices.updateReligion(req.params.id, req.body);
        if (!religion) {
            return sendResponse(res, NOT_FOUND, 'Religion not found');
        }
        return sendResponse(res, OK, 'Religion updated successfully', religion);
    }),

    deleteReligion: asyncHandler(async (req, res) => {
        const religion = await religionServices.deleteReligion(req.params.id);
        if (!religion) {
            return sendResponse(res, NOT_FOUND, 'Religion not found');
        }
        return sendResponse(res, OK, 'Religion deleted successfully');
    }),
};

module.exports = religionController;
