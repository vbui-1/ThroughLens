const asyncHandler = require("express-async-handler");
const userModel = require("../model/user_data_model");

// get ./api/users
exports.getData = asyncHandler(async (req, res) => {
  const user = await userModel.find();
  res.status(200).json(user);
});

// post ./api/users
exports.putData = asyncHandler(async (req, res) => {
  const user = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json(user);
});

// update ./api/users requires id parametter
exports.updateData = asyncHandler(async (req, res) => {
  const updatedData = await userModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { useFindAndModify: false }
  );
  res.status(200).json(updatedData);
});

// delete ./api/users requires id parameter
exports.deleteData = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.params.id);
  await user.remove();
  res.status(200).json({ id: req.params.id });
});
