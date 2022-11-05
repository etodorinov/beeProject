const databaseInitialization = require("./initializations/databaseInitialization");
const server = require("./initializations/server");

async function start() {
  await databaseInitialization();
  server();
}

start();
