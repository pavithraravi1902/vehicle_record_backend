const Joi = require('joi');
const validationSchema = Joi.object({
    registrarName: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    vehicleName: Joi.string().required(),
    brandName: Joi.string().required(),
    modelName: Joi.string().required(),
    year: Joi.number().required(),
    cost: Joi.number().required(),
    description: Joi.string().required()
});

const validateDelete = Joi.object({
    recordId: Joi.number().required(),
});
module.exports = {validationSchema, validateDelete};