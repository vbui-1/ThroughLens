const express = require("express");
const app = express();
const dotenv = require("dotenv");
//const expressLayouts = require('express-ejs-layouts');
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

// ENV
dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

require("./authentication/passport")(passport);
// to connect mongoDB
const mongoConnection = require("./database/mongo_connection");
mongoConnection();

// EJS ENGINE
//app.use(expressLayouts);
app.set("view engine", "ejs");
app.use("/css", express.static(path.resolve(__dirname, "include/css")));
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global flash messages
app.use(function (req, res, next) {
  res.locals.success_message = req.flash("success_message");
  res.locals.error_message = req.flash("error_message");
  res.locals.error = req.flash("error");
  next();
});

// ROUTES
app.use("/", require("./router/view_route"));
app.use("/", require("./router/user_route"));


// PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/index`);
});

