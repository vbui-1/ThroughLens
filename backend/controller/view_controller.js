const asyncHandler = require("express-async-handler");
const path = require("path");

/*
to view signup page
public
*/
exports.signup = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/signup.ejs"));
});

/*
to view login page
public
*/
exports.login = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/login.ejs"));
});

/*
to view index page
protected
*/
exports.index = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/index.ejs"));
});

/*
to view account page
protected
*/
exports.account = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/account.ejs"), {
    user: req.user,
  });
});

/*
to view gallery page
protected
*/
exports.gallery = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/gallery.ejs"));
});

/*
to view service page
protected
*/
exports.service = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/service.ejs"));
});

/*
to view update page
protected
*/
exports.update = asyncHandler((req, res) => {
  res.render(path.join(__dirname, "../view/update.ejs"), {
    user: req.user,
  });
});
