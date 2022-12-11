const asyncHandler = require("express-async-handler");
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
    successRedirect: "/",
    failureFlash: true, 
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

exports.delete = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id)
  
  User.findByIdAndDelete(id)
  .then((user) => {
      req.flash("success_message", "Account deleted");
      res.redirect("/signup")
  })

});

// put /update
exports.update = asyncHandler(async (req, res) => {
   const id = req.params.id;
  const { name, email, password } = req.body;
  console.log(req.params.id)
  console.log(req.body)
  req.body.password = await bcrypt.hash(req.body.password, 10);
  if (!name || !email || !password) {
    req.flash("error_message", "Please make sure that all fields are filled");
    res.redirect("/update", {
      user: req.body,
    });
  } else  {
    //checks if email already exist
    User.findOne({ email: email }).then((user) => {
      if (user) {
        req.flash("error_message", "That email is taken already already");
        res.redirect("/update", {
          user: req.body,
        });
      } else {

       

   User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          req.flash("success_message", "You have successfully update your account, please log in");
          res.redirect("/login", {
            user: req.body,
          });
      
      }
    });
 // hashed password
 
  }
 /*
  .then((data) => {
    if (!data) {
      res
        .status(404)
        .send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      console.log("Cannot Update user with ${id}. Maybe user not found!");
    } else {
      //res.send(data);
      //console.log("send data");
    }
  })
  .catch((err) => {
    res.status(500).send({ message: "Error Update user information" });
  });

 */
  
});

// get /read
exports.read = asyncHandler((req, res) => {
    const id = req.params.id;
    console.log(id)
    User.findById(id)
      .then((user) => {
          res.render("account", {
            user
          })
      })
});


