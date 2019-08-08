// code away!
const express = require("express");
const 
const server = express();
const port = 5000;

function logger(req, res, next) {
  console.log(`
  [${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
    "Origin "
  )} `);next()
}
var 
server.use(express.json());

server.use(logger)

server.listen(port, () => console.log("connected"));
