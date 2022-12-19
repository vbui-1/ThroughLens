const express = require("express");
const router = express.Router();

const path = require("path");
// get html file to browser

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
route to update page
protected
*/
router.get("/update", auth.ensureAuthenticated, controller.update);

/*
route to schedule page
protected
*/
router.get("/schedule", auth.ensureAuthenticated, controller.schedule);

/*
route to payment page
protected
*/
router.get("/payment", auth.ensureAuthenticated, controller.payment);

/*
route to review_order page
protected
*/
router.get("/review_order", auth.ensureAuthenticated, controller.review_order);

/*
route to confirmation page
protected
*/
router.get("/confirmation", auth.ensureAuthenticated, controller.confirmation);

module.exports = router;
