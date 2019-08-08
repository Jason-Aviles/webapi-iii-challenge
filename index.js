// code away!
require('dotenv').config();
const express = require("express");

const server = express();
const port = process.env.PORT  || 5000;

const user = require('./users/userRouter')
const post = require('./posts/postRouter')
function logger(req, res, next) {
  console.log(`
  [${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
    "Origin "
  )} `);next()
}

server.use(express.json());

server.use(logger)

server.use('/post',post)
server.use('/users',user)

server.listen(port, () => console.log("connected"));
