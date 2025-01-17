const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://Node:JEmmi@tinder.co90u.mongodb.net/");
};

module.exports = {
  connectDB,
};
