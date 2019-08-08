// code away!
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT  || 5000;
const db= require('./posts/postDb')
const user = require('./users/userRouter')
const post = require('./posts/postRouter')
function logger(req, res, next) {
  console.log(`
  [${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
    "Origin "
  )} `);next()
}

server.use(express.json());
server.use(cors());
server.use(logger)





server.get('/', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});

server.use('/post',post)
server.use('/users',user)

server.listen(port, () => console.log("connected"));
