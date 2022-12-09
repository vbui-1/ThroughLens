const axios = require("axios");
const dotenv = require("dotenv");
const asyncHandler = require("express-async-handler");

// to listen to PORT from .env file
dotenv.config({ path: ".env" });
const secret = process.env.SECRET_TOKEN;

exports.user_info = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/user/data")
    .then((response) => {
      console.log(data);
      res.render("../view/user", { User: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/user/data", { params: { id: req.query.id } })
    .then((userdata) => {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// post /login
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
