const Order = require('../model/Order')

const getAll = function(req,res){
    Order.findAll({where: { UserId: req.params.UserId } })
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const getOne = function(req,res){
  Order.findOne({where: { id: req.params.id, UserId: req.params.UserId }})
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

const createOrder = function(){
    Client.create({ 
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        address:req.body.address,
        phoneNumber: req.body.phoneNumber,
        image:req.body.image,
        createdAt:req.body.createdAt,
        updatedAt:req.body.updatedAt
      })
      .then((results) => {
        res.status(200).send(results); 
      })
      .catch((error) => {
        res.status(500).send(error);
      });
}



const updateOrder = function(req,res){
  Order.update(
  {firstName:req.body.firstName,
    lastName:req.body.lastName,
    address:req.body.address,
    phoneNumber: req.body.phoneNumber,
    image:req.body.image,
    createdAt:req.body.createdAt,
    updatedAt:req.body.updatedAt
  },
  {where: { id: req.params.id } })
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

const deleteOrder = function(req,res){
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

module.exports = {getAll,getOne,updateOrder,deleteOrder}