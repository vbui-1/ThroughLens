const express = require("express");
const app = express();
const dotenv = require("dotenv");

// to listen to PORT from .env file
dotenv.config({ path: ".env" });
const PORT = process.env.PORT;

// to connect mongoDB
const mongoConnection = require("./database/connetion");
mongoConnection();

// built in middleware parser express json
app.use(express.json());

// to handle URLencoded data middleware
app.use(express.urlencoded({ extended: false }));

// to access crud operations
app.use("/api/users", require("./router/router"));

// to listen to port 3000 from the .env file
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
