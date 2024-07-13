const Joi = require("@hapi/joi");

const createProductValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    shopId: Joi.string().required(),
  });
  return schema.validate(data);
};

const updateProductValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    description: Joi.string().optional(),
  });
  return schema.validate(data);
};

module.exports = {
  createProductValidation,
  updateProductValidation,
};
