const Joi = require('joi');

const cityValidator = {
    createCity: Joi.object({
        name: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
    }),
};

module.exports = cityValidator;
