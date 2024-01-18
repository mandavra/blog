const { blogSchema } = require("../models");

const addblog = (body) => {
  return blogSchema.create(body);
};

const getblog = () => {
  return blogSchema.find().populate("adminid").populate("userid");
};

const deleteblog = (id) => {
  return blogSchema.findByIdAndDelete(id);
};

module.exports = { addblog, getblog, deleteblog};
