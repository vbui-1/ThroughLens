const express = require("express");
const router = express.Router();
const controller = require("../controller/user_controller");

router.post("/user/data", controller.create);
router.get("/user/data", controller.read);
router.put("/user/data/:id", controller.update);
router.delete("/user/data/:id", controller.delete);
router.post("/login", controller.login);
router.get("/logout", controller.logout);

module.exports = router;
