const express = 'express';

const router = express.Router();
const DBuser = require('./userDb')


router.post('/', (req, res) => {
  const body = req.body;
  DBuser.insert(body).then(user => res.status(201).json(user))
});

router.post('/:id/posts', (req, res) => {
  const body = req.body;

  DBuser.insert(body).then(user => res.status(201).json(user))

});

router.get('/', (req, res) => {
DBuser.get().then(user => res.status(200).json(user))
});

router.get('/:id', (req, res) => {
const {id} = req.params
DBuser.getById(id).then(user => res.status(200).json(user))

});

router.get('/:id/posts', (req, res) => {
  const {id} = req.params
  DBuser.getUserPosts(id).then(user => res.status(200).json(user))
});

router.delete('/:id', (req, res) => {
  const {id} = req.params
  DBuser.remove(id).then(user => res.status(203).json(user))
});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
const {id} = req.params;
if(!id){
  res.status(400).json({ message: "invalid user id" })
}
else{next()}

};

function validateUser(req, res, next) {
  const body = req.body;
  const name = req.body.name;
  if (!body) {
    res.status(400).json({ error: "missing user data" });
  } else if (!name) {
    res.status(400).json({ error: "missing required name field" });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  const body = req.body;
  const text = req.body;
  if (!body) {
    res.status(400).json({message: "missing post data" });
  } else if (!text) {
    res.status(400).json({  message: "missing required text field" });
  } else {
    next();
  }
};

module.exports = router;
  