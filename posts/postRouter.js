const express = 'express';

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

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