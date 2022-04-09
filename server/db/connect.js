const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
