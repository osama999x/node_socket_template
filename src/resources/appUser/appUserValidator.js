const Joi = require('joi');

const appUserValidator = {
    create: Joi.object({
        name: Joi.string().optional(),
        email: Joi.string().email().required(),
        password: Joi.string().optional(),
        mobile: Joi.string().optional(),
        gender: Joi.string().valid('Male', 'Female', 'Other').optional(),
        maritalStatus: Joi.string().valid('Married', 'Divorcee', 'Unmarried').optional(),
        dob: Joi.date().optional(),
        religion: Joi.string().length(24).optional(),
        city: Joi.string().length(24).optional(),
        isActive: Joi.boolean().optional(),
        isPasswordSecure: Joi.boolean().optional(),
        isDeleted: Joi.boolean().optional(),
        profileType: Joi.string().valid('Sibling', 'Friend', 'Child', 'Parent', 'Relative', 'Self').optional(),
    }),

    update: Joi.object({
        userId: Joi.string().length(24).required(),
        name: Joi.string().optional(),
        email: Joi.string().email().optional(),
        password: Joi.string().optional(),
        mobile: Joi.string().optional(),
        gender: Joi.string().valid('Male', 'Female', 'Other').optional(),
        maritalStatus: Joi.string().valid('Married', 'Divorcee', 'Unmarried').optional(),
        dob: Joi.date().optional(),
        religion: Joi.string().length(24).optional(),
        city: Joi.string().length(24).optional(),
        isActive: Joi.boolean().optional(),
        isPasswordSecure: Joi.boolean().optional(),
        isDeleted: Joi.boolean().optional(),
        profileType: Joi.string().valid('Sibling', 'Friend', 'Child', 'Parent', 'Relative', 'Self').optional(),
    }),

    getById: Joi.object({
        id: Joi.string().length(24).required(),
    }),

    updateStatus: Joi.object({
        id: Joi.string().length(24).required(),
        isActive: Joi.boolean().required(),
    }),
};

module.exports = appUserValidator;
