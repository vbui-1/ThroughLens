const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// Load User model
const User = require("../model/user_model");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // see if uuser email in database
      User.findOne({
        email: email,
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: "That email is not registered" });
        }

        // see if password match with hashed password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
