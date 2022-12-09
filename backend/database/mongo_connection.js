const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// connection with mongoDB
module.exports = asyncHandler(async () => {
  const con = await mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected : ${con.connection.host}`);
});
