const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/user_controller");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/user", getUser);


module.exports = router;
