const express = require("express");
const app = express();
const dotenv = require("dotenv");
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
app.set("view engine", "ejs");

// CSS
app.use("/css", express.static(path.resolve(__dirname, "include/css")));

// Express session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);
// Connect flash
app.use(flash());

// Passport middleware
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// Global flash messages
app.use(function (req, res, next) {
  res.locals.success_message = req.flash("success_message");
  res.locals.error_message = req.flash("error_message");
  //res.locals.error = req.flash("error");
  next();
});

// ROUTES
app.use("/", require("./router/view_route"));
app.use("/", require("./router/user_route"));

// PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/index`);
});
