const mongoose = require("mongoose");

const { DATABASE_URL } = require("../constants");

async function databaseInitialization() {
  await mongoose.connect(DATABASE_URL);
  console.log(`Connected to database at MongoDB.`);
}

module.exports = databaseInitialization;
