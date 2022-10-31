const mongoose = require("mongoose");

// template for user data
const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const login = mongoose.model("login", schema);
module.exports = login;
