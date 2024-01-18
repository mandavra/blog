
const { commentedSchema } = require("../models");

const addcommented = (body) => {
  return commentedSchema.create(body);
};

const getcommented = () => {
  return commentedSchema.find().populate("blogid").populate("userid").populate("adminid");
};

const deletecommented = (id) => {
  return commentedSchema.findByIdAndDelete(id);
};

module.exports = { addcommented, getcommented, deletecommented};
