//for VALIDATION (validating email & pass) i am using package: @hapi/joi
const Joi = require("@hapi/joi");

//function to validate data (gpt code)
const validateUser = (data, schema) => {
  return schema.validate(data);
};

//like we created schema in User model
//we will create schema here for validation

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return validateUser(data, schema);
};

//login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return validateUser(data, schema);
};

module.exports = { registerValidation, loginValidation };
