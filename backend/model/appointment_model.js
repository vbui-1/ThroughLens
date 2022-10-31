const mongoose = require("mongoose");

// template for user data
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const appointment = mongoose.model("appointment", schema);
module.exports = appointment;
