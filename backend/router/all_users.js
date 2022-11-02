const express = require("express");
const router = express.Router();

// access crud process from controller
const {
  getData,
  putData,
  updateData,
  deleteData,
} = require("../controller/all_users");

//  crud operation
router.get("/", getData);
router.post("/", putData);

//  crud operation with parameter
router.put("/:id", updateData);
router.delete("/:id", deleteData);

module.exports = router;
