const asyncHandler = require('express-async-handler');
const appUserServices = require('./appUserServices');
const sendResponse = require('../../utils/sendResponse');
const AppUserValidator = require('./appUserValidator');
const responseStatusCodes = require('../../constants/responseStatusCodes');

const AppUserController = {
    createAppUser: asyncHandler(async (req, res) => {
        const validationResult = AppUserValidator.create.validate(req.body);
        if (validationResult.error) {
            return await sendResponse(
                res,
                responseStatusCodes.BAD,
                validationResult.error.details[0].message,
                null,
                req.logId
            );
        }

        const AppUser = await appUserServices.create(req.body);
        await sendResponse(
            res,
            responseStatusCodes.CREATED,
            'App User created successfully',
            AppUser,
            req.logId
        );
    }),

    updateAppUser: asyncHandler(async (req, res) => {
        const validationResult = AppUserValidator.update.validate(req.body);
        if (validationResult.error) {
            return await sendResponse(
                res,
                responseStatusCodes.BAD,
                validationResult.error.details[0].message,
                null,
                req.logId
            );
        }
        const { userId, email, mobile } = req.body;

        const validateMobile = await appUserServices.getByMobile(mobile);
        if (validateMobile && validateMobile?._id.toString() !== userId) {
            await sendResponse(
                res,
                responseStatusCodes.BAD,
                'Mobile number already registered against and other user',
                null,
                req.logId
            );
        }
        const validateEmail = await appUserServices.getByEmail(email);
        if (validateEmail && validateEmail?._id.toString() !== userId) {
            await sendResponse(
                res,
                responseStatusCodes.BAD,
                'Email number already registered against and other user',
                null,
                req.logId
            );
        }

        const updatedAppUser = await appUserServices.update(userId, req.body);
        if (updatedAppUser) {
            await sendResponse(
                res,
                responseStatusCodes.CREATED,
                'App User updated successfully',
                null,
                req.logId
            );
        } else {
            await sendResponse(
                res,
                responseStatusCodes.BAD,
                'App User Not found',
                null,
                req.logId
            );
        }
    }),

    getAllAppUsers: asyncHandler(async (req, res) => {
        const AppUsers = await appUserServices.getAll();
        await sendResponse(
            res,
            responseStatusCodes.OK,
            'App Users retrieved successfully',
            AppUsers,
            req.logId
        );
    }),

    getAppUserById: asyncHandler(async (req, res) => {
        const validationResult = AppUserValidator.getById.validate(req.params);
        if (validationResult.error) {
            return await sendResponse(
                res,
                responseStatusCodes.BAD,
                validationResult.error.details[0].message,
                null,
                req.logId
            );
        }
        const { id } = req.params;
        const AppUser = await appUserServices.getById(id);

        if (!AppUser) {
            return await sendResponse(
                res,
                responseStatusCodes.BAD,
                'App Users not found',
                null,
                req.logId
            );
        }

        await sendResponse(
            res,
            responseStatusCodes.OK,
            'App User retrieved successfully',
            AppUser,
            req.logId
        );
    }),

    updateStatus: asyncHandler(async (req, res) => {
        const validationResult = AppUserValidator.updateStatus.validate(req.body);
        if (validationResult.error) {
            validationResult.error.details[0].message,
                await sendResponse(
                    res,
                    BAD,
                    validationResult.error.details[0].message,
                    null,
                    req.logId
                );
            return;
        }
        const { id, isActive } = req.body;
        const update = await appUserServices.updateStatus(id, isActive);
        if (!update) {
            return await sendResponse(
                res,
                responseStatusCodes.NOTFOUND,
                'No App found against provided info',
                null,
                req.logId
            );
        }
        await sendResponse(
            res,
            responseStatusCodes.OK,
            'Activness Successfully changed',
            null,
            req.logId
        );
    }),

    deleteAppUser: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const deleted = await appUserServices.deleteApp(id);
        if (!deleted) {
            return await sendResponse(
                res,
                responseStatusCodes.NOTFOUND,
                'No App found against provided info',
                null,
                req.logId
            );
        }
        await sendResponse(
            res,
            responseStatusCodes.OK,
            'Successfully deleted.',
            null,
            req.logId
        );
    }),
};

module.exports = AppUserController;