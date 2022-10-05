const Joi = require('joi');
const validationSchema = Joi.object({
    registrar_name: Joi.string().required(),
    mobile_number: Joi.string().required(),
    vehicle_name: Joi.string().required(),
    brand_name: Joi.string().required(),
    model_name: Joi.string().required(),
    year: Joi.number().required(),
    cost: Joi.number().required(),
    description: Joi.string().required()
});

const validateDelete = Joi.object({
    record_id: Joi.number().required(),
});
module.exports = {validationSchema, validateDelete};