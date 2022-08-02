const express = require("express");

const { PORT } = require("../constants");

const cors = require("../middlewares/corsMiddleware");
const hiveController = require("../controllers/hiveController");
const userController = require("../controllers/userController");

function expressInitialization() {
  const app = express();

  app.use(cors);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/hives", hiveController);
  app.use("/users", userController);

  app.listen(PORT, () => {
    console.log(`App started on port ${PORT}...`);
  });
}

module.exports = expressInitialization;
