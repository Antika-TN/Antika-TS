const express = require("express");
const router = express.Router();
const AdminControler = require('../controllers/admin')

router.get("/sellers",AdminControler.getAllseller);
router.get("/clients",AdminControler.getAllclient);
router.get("/getAllProduct",AdminControler.getAllProducts);
router.get("/selectClientCount",AdminControler.SelectclientCount);
router.get("/selectSellerCount",AdminControler.SelectsellerCount);


router.delete("/deleteSeller/:id",AdminControler.deleteSeller)
router.delete("/deleteClient/:id",AdminControler.deleteClient)
router.delete("/deleteProduct/:id",AdminControler.deleteProduct)

module.exports = router;
