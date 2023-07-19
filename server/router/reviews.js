const express = require('express');
const router = express.Router();
const {getAll,addReview,update}=require('../controler/ReviewControler')

router.get('/:id',getAll);

router.post('/:ClientId/:ProductId',addReview);

router.put('/:id', update /*  middleware ,controller */);

module.exports = router;
