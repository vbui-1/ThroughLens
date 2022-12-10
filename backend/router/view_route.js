const express = require("express");
const router = express.Router();
<<<<<<< HEAD
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
=======
>>>>>>> d4da6d7f11fc76a35194f5459f2a0985ee23ec5f
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

<<<<<<< HEAD
=======
/*
route to service page
protected
*/
router.get("/update", auth.ensureAuthenticated, controller.update);
>>>>>>> d4da6d7f11fc76a35194f5459f2a0985ee23ec5f

module.exports = router;
