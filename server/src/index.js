const databaseInitialization = require("./initializations/databaseInitialization");
const expressInitialization = require("./initializations/expressInitialization");

async function start() {
  await databaseInitialization();
  expressInitialization();
}

start();
