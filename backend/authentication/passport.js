const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// Load User model
const User = require("../model/user_model");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // check to see if email is in database
      User.findOne({
        email: email,
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: "Invalid email address" });
        }

        // check to see if password match with hashed password in databse
        bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) throw error;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Invalid password" });
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};
