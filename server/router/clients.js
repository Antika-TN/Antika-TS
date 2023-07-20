const express = require('express');
const router = express.Router();
const ClientController= require ("../controllers/clients")


router.get('/',  /*  middleware ,controller */ClientController.getAll);
router.get('/:id',  /*  middleware ,controller */ClientController.getOne);
router.put('/:id',  /*  middleware ,controller */ClientController.updateClient);
router.delete('/:id',  /*  middleware ,controller */ClientController.deleteClient);




module.exports = router;
