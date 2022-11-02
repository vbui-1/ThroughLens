const asyncHandler = require("express-async-handler");
const userModel = require("../model/all_users");

// get ./users
exports.getData = asyncHandler(async (req, res) => {
  const user = await userModel.find();
  res.status(200).json(user);
});

// post ./users
exports.putData = asyncHandler(async (req, res) => {
  const user = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json(user);
});

// update /users requires id parametter
exports.updateData = asyncHandler(async (req, res) => {
  const updatedData = await userModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { useFindAndModify: false }
  );
  res.status(200).json(updatedData);
});

// delete /users requires id parameter
exports.deleteData = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.params.id);
  await user.remove();
  res.status(200).json({ id: req.params.id });
});
