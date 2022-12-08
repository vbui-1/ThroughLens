const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user_model");
const passport = require("passport");

// post /create a new user
exports.create = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // checks if all fields are filled
  if (!name || !email || !password) {
    req.flash("error_message", "Please make sure that all fields are filled");
    res.redirect("/signup");
  } else {
    //checks if email already exist
    User.findOne({ email: email }).then((user) => {
      if (user) {
        req.flash("error_message", "The email you entered already exist");
        res.redirect("/signup");
      } else {
        // creates user with hashed password
        const user = { name, email, password };
        bcrypt.hash(user.password, 10, (error, hash) => {
          User.create({ name, email, password: hash });
          req.flash("success_message", "You are now registered, please log in");
          res.redirect("/login");
        });
      }
    });
  }
});

// post /login
exports.login = asyncHandler((req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/account",
    failureFlash: true,
    failureMessage: "try again",
    failureRedirect: "/login",
   
  })(req, res, next);
});

// Logout
exports.logout = asyncHandler((req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    req.flash("success_message", "You have successfully logged out");
    res.redirect("/login");
  });
});

// put /update
exports.update = asyncHandler(async (req, res) => {
  if (!req.body) {
    req.flash("error_message", "Make sure all fields are filled");
  }
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
        res.send(data);
        console.log(data)
    })
   
});

// get /read
exports.read = asyncHandler((req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    User.findById(id)
      .then((user) => {
          res.send(user);
      })
    } else {
    User.find()
      .then((user) => {
        res.send(user);
      })
  }
});

exports.delete = asyncHandler(async (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
  .then((user) => {
      req.flash("success_message", "Account deleted");
      res.redirect("/signup")
  })

});
