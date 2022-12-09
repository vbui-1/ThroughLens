const asyncHandler = require("express-async-handler");
const User = require("../model/user_model");
const path = require("path");

// signup page
exports.signup = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/signup.ejs"));
});

// login page
exports.login = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/login.ejs"));
});

// index page
exports.index = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/index.ejs"));
});

// user/info page
exports.user_info = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/user_info.ejs"));
});

// gallery page
exports.gallery = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/gallery.ejs"));
});

// service page
exports.service = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/service.ejs"));
});
