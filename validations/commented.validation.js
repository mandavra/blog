const Joi = require("joi")

const addcommented = {
  body: Joi.object().keys({
    commentcontent: Joi.string().required().trim(),
    blogid: Joi.string().required().trim(),
    commenteduser: Joi.string().required(),
  }),
};

module.exports = { addcommented};