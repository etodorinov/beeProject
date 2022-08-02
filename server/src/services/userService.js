const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");

const { SALT_ROUNDS, JWT_SECRET } = require("../constants");

async function register(data) {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    throw new Error("You must type a valid email address.");
  }

  if (data.username.length < 4) {
    throw new Error("Your username must be at least four (4) characters long.");
  }

  if (data.password.length < 4) {
    throw new Error("Your password must be at least four (4) characters long.");
  }

  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  const registeredUser = await User.create({
    email: data.email,
    username: data.username,
    password: hashedPassword,
  });

  return tokenCreator(registeredUser);
}

async function login(data) {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    throw new Error("You must type a valid email address.");
  }

  const user = await User.findOne({ email: data.email });

  if (data.password.length < 4 || !user) {
    throw new Error("Incorrect email or password.");
  }

  const passwordMatch = await bcrypt.compare(data.password, user.password);

  if (!passwordMatch) {
    throw new Error("Incorrect email or password.");
  }

  return tokenCreator(user);
}

module.exports = {
  register,
  login,
  validateToken,
};

async function tokenCreator(userData) {
  const payload = { _id: userData._id, email: userData.email };

  const token = await new Promise((resolve, reject) =>
    jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" }, (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    })
  );

  return { _id: userData._id, email: userData.email, accessToken: token };
}

async function validateToken(token) {
  const validToken = await new Promise((resolve, reject) =>
    jwt.verify(token, JWT_SECRET, { expiresIn: "1d" }, (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    })
  );

  return validToken;
}
