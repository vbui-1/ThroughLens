const express = require("express");
const app = express();
const dotenv = require("dotenv");

// to listen to PORT from .env file
dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

// to connect mongoDB
const mongoConnection = require("./database/mongo_connection");
mongoConnection();

// built in middleware parser express json
app.use(express.json());

// to handle URLencoded data middleware
app.use(express.urlencoded({ extended: true }));

// to view html pages from router
app.use("/", require("./router/view_route"));

// to access crud operations
app.use("/all/users", require("./router/all_users"));
app.use("/", require("./router/user_route"));

// to listen to port 3000 from the .env file
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
