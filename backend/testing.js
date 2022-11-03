//const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const password = "demo";

//exports.das = asyncHandler(async (res, req) => {});
const rounds = 10;

bcrypt.hash(password, 5, (err, hashPass) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(password);
  console.log(hashPass);
  console.log(bcrypt.compareSync(password, hashPass));
});

//const pass = bcrypt.compare()
