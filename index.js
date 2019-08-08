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



server.listen(port, () => console.log("connected"));
