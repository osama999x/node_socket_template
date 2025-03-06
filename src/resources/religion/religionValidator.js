const Joi = require('joi');

const religionValidator = {
    createReligion: Joi.object({
        name: Joi.string().required(),
    }),
};

module.exports = religionValidator;
