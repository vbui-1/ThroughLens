const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const morgan = require("morgan")

// ENV
dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

require("./authentication/passport")(passport);
// to connect mongoDB
const mongoConnection = require("./database/mongo_connection");
mongoConnection();

app.use(express.json());
// EJS ENGINE
app.set("view engine", "ejs");

app.use(morgan("dev"))

app.use(express.static("assets"))

app.use(express.static(__dirname + '/public'))
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
app.use(function (req, res, next) {
  res.locals.success_message = req.flash("success_message");
  res.locals.error_message = req.flash("error_message");
  res.locals.error = req.flash("error");
  next();
});
// Passport middleware
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());



// ROUTES
app.use("/", require("./router/view_route"));
app.use("/user", require("./router/user_route"));


// PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

