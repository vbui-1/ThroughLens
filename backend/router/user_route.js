const express = require("express");
const router = express.Router();
const controller = require("../controller/user_controller");

router.post("/signup", controller.create);
router.get("/account/:id", controller.read);
router.put("/update/:id", controller.update);
router.get("/delete/:id", controller.delete);
router.post("/login", controller.login);
router.get("/logout", controller.logout);

module.exports = router;
