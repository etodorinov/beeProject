const { validateToken } = require("../services/userService");

async function authorization(req, res, next) {
  const token = req.headers["x-authorization"];

  if (token) {
    const valid = await validateToken(token);

    res.user = valid;

    if (!valid) {
      return res
        .status(401)
        .json({ message: "Invalid access token. Please log in" });
    }
  }

  next();
}

module.exports = {
  authorization,
};
