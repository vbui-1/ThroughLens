const asyncHandler = require("express-async-handler");
const userModel = require("../model/user_model");
//const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

// post /signup
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  user.save;
  res.redirect("/");
});

// post /login
exports.loginUser = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email, password });
  res.json(user);
  const match = await bcrypt.compare(req.body.password, userModel.password);
  const accessToken = jwt.sign(JSON.stringify(email), process.env.SECRET_TOKEN);
  if (match) {
    res.json({ accessToken: accessToken });
  } else {
    res.json({ message: "Invalid Credential" });
  }
  /*
  const { email, password } = req.body;
  const user = userModel.findOne({ email, password });
  console.log("success " + user);
  if (user && password) {
    res.json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  */
});

// get /user
exports.getUser = asyncHandler(async (req, res) => {
  res.json({ message: "Get User" });
});
