const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// to wait for a connection with mongoDB
module.exports = asyncHandler(async () => {
  const con = await mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected : ${con.connection.host}`);
});
