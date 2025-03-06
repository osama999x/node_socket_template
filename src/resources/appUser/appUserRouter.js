const express = require('express');
const {
    createAppUser,
    getAllAppUsers,
    updateAppUser,
    getAppUserById,
    deleteAppUser,
    updateStatus,
} = require('./appUserController');
const AppUserRouter = express.Router();

AppUserRouter
    .route('/')
    .get(getAllAppUsers)
    .put(updateAppUser);

AppUserRouter.route('/signUp').post(createAppUser)
AppUserRouter.route('/updateStatus').patch(updateStatus);
AppUserRouter.route('/:id').get(getAppUserById).delete(deleteAppUser);
module.exports = AppUserRouter;