const express = 'express';

const router = express.Router();
const DBpost = require('./postDb')
router.get('/', (req, res) => {
  DBpost.get().then(user => res.status(200).json(user)).catch(err => res.status(500).json({message:'check your backend'}))
});

router.get('/:id', (req, res) => {
  const {id} = req.params
  DBpost.getById(id).then(user => res.status(200).json(user)).catch(err => res.status(500).json({message:'check your backend'}))
  
});

router.delete('/:id', (req, res) => {
  const {id} = req.params
  DBpost.remove(id).then(user => res.status(203).json(user)).catch(err => res.status(500).json({message:'check your backend'}))
});

router.put('/:id', (req, res) => {
  const {id} = req.params
  const body = req.body;

  DBpost.update(id,body).then(user => res.status(201).json(user)).catch(err => res.status(500).json({message:'check your backend'}))
});

// custom middleware

function validatePostId(req, res, next) {
  const {id} = req.params;
  if(!id){
    res.status(400).json({ message: "invalid user id" })
  }
  else{next()}
};

module.exports = router;