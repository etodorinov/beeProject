const router = require("express").Router();

const userService = require("../services/userService");
const { authorization } = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    const token = await userService.register(req.body);
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }


});

router.post("/login", async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.get("/logout", authorization, (req, res) => {
  console.log(req.headers["x-authorization"], "27 from userController");
  res.status(204).end();
});

module.exports = router;
