const express = require("express");
const router = express.Router();
const controller = require("../controller/view_controller");
const auth = require("../authentication/authenticator");

/*
route to signup page
public
*/
router.get("/signup", auth.forwardAuthenticated, controller.signup);

/*
route to login  page
public
*/
router.get("/login", auth.forwardAuthenticated, controller.login);

/*
route to index page
protected
*/
router.get("/", auth.ensureAuthenticated, controller.index);

/*
route to account page
protected
*/
router.get("/account", auth.ensureAuthenticated, controller.account);

/*
route to gallery page
protected
*/
router.get("/gallery", auth.ensureAuthenticated, controller.gallery);

/*
route to service page
protected
*/
router.get("/service", auth.ensureAuthenticated, controller.service);

/*
route to service page
protected
*/
router.get("/update", auth.ensureAuthenticated, controller.update);

module.exports = router;
