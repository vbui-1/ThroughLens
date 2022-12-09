const express = require("express");
const router = express.Router();
const path = require("path");
// get html file to browser
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/index.html"));
});
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/signup.html"));
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/login.html"));
});
router.get("/frontpage", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/frontpage.html"));
});
router.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/OurGallery.html"));
});
router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/all_users.html"));
});
const controller = require("../controller/view_controller");
const auth = require("../authentication/authenticator");

// signup page   route
router.get("/signup", auth.forwardAuthenticated, controller.signup);

// login page route
router.get("/login", auth.forwardAuthenticated, controller.login);

// index page route protected
router.get("/index", auth.ensureAuthenticated, controller.index);

// user info page  route protected
router.get("/user/info", auth.ensureAuthenticated, controller.user_info);

// gallery page route  protected
router.get("/gallery", auth.ensureAuthenticated, controller.gallery);

// service page route  protected
router.get("/service", auth.ensureAuthenticated, controller.service);


module.exports = router;
