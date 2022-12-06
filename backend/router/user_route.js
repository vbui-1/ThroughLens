const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controller/user_controller");

//const service = require("../service/user_service");

router.post("/user/data", controller.create);
router.get("/user/data", controller.read);
router.put("/user/data/:id", controller.update);
router.delete("/user/data/:id", controller.delete);
router.post("/login", controller.login);
/*
router.get("/user/info", service.user_info);
router.get("/add/user", service.add_user);
router.get("/update/user", service.update_user);
router.post("/login", service.loginUser);
*/

module.exports = router;
