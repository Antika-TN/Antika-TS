const express = require('express');
const router = express.Router();
const {getAll}=require('../controllers/reviews')


router.get('/:id',/*  middleware ,controller */getAll);



module.exports = router;
