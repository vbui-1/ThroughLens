const asyncHandler = require("express-async-handler");
const userModel = require("../model/user_model");
//const jwt = require("jsonwebtoken");

// post /signup
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = userModel.create({
    name,
    email,
    password,
  });
  user.save;
  res.redirect("/");
});

// post /login
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = userModel.findOne({ email });
  if (user && password == user.password) {
    res.json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// get /user
exports.getUser = asyncHandler(async (req, res) => {
  res.json({ message: "Get User" });
});
