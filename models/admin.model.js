const mongoose = require("mongoose");
const  adminSchema = mongoose.Schema({
  adminName: {
    type: String,
    trim: true,
  },
  
  adminEmail: {
    type: String,
    trim: true,
  },
});

const admin = mongoose.model("adminSchema",adminSchema);

module.exports =admin;