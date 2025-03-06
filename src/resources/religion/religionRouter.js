const express = require('express');
const religionController = require('./religionController');

const religionRouter = express.Router();

religionRouter.route('/')
    .post(religionController.createReligion)
    .get(religionController.getAllReligions);

religionRouter.route('/:id')
    .get(religionController.getReligionById)
    .put(religionController.updateReligion)
    .delete(religionController.deleteReligion);

module.exports = religionRouter;
