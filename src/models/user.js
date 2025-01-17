const mongoose = require("mongoose");

// const { Schema } = mongoose;

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("users", userModel);

module.exports = User;
