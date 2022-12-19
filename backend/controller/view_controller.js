const asyncHandler = require("express-async-handler");
const path = require("path");

/*
to view signup page
public
*/
exports.signup = asyncHandler((req, res) => {
  res.render("signup");
});

/*
to view login page
public
*/
exports.login = asyncHandler((req, res) => {
  res.render("login");
});

/*
to view index page
protected
*/
exports.index = asyncHandler((req, res) => {
  res.render("index");
});

/*
to view account page
protected
*/
exports.account = asyncHandler((req, res) => {
  res.render("account", {
    user: req.user,
  });
});

/*
to view gallery page
protected
*/
exports.gallery = asyncHandler((req, res) => {
  res.render("gallery");
});

/*
to view service page
protected
*/
exports.service = asyncHandler((req, res) => {
  res.render("service");
});

/*
to view update page
protected
*/
exports.update = asyncHandler((req, res) => {
  res.render("update", {
    user: req.user,
  });
});

/*
to view schedule page
protected
*/
exports.schedule = asyncHandler((req, res) => {
  res.render("schedule");
});
