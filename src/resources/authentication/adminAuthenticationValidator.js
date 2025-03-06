const Joi = require('joi');

const adminAuthenticationValidator = {
    adminLogin: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

module.exports = adminAuthenticationValidator;