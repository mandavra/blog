const Joi = require("joi")

const addadmin = {
  body: Joi.object().keys({
    adminName: Joi.string().required().trim(),
    adminEmail: Joi.string().required(),
  }),
};

module.exports = { addadmin};