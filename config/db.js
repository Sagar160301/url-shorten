const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://url:url@cluster0.s8z9nzi.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
