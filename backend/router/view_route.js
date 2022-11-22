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
  res.sendFile(path.join(__dirname, "../view/gallery.html"));
});
router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/all_users.html"));
});
router.get("/scheduling", (req, res) => {
  res.sendFile(path.join(__dirname, "../view/scheduling.html"));
});

module.exports = router;
