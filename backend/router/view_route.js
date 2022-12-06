const express = require("express");
const router = express.Router();
const path = require("path");
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
