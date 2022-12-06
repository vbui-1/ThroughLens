const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user_model");
const passport = require("passport");

// post /create
exports.create = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 10); //hash the password

  //const user =
  User.create({ name, email, password: hashedPassword });
  // user.save;
  res.redirect("/login");
});

// post /login
exports.login = asyncHandler((req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
});

// put /update
exports.update = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, secret);
  console.log(user);
  res.json({ status: "ok" });
});

// get /read
exports.read = asyncHandler((req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    User.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "No user found with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    User.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
});

exports.delete = asyncHandler(async (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
});
