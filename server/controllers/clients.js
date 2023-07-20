const Client = require('../model/User')

const getAll = function(req,res){
    Client.findAll({})
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const getOne = function(req,res){
  Client.findOne({where: { id: req.params.id } })
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

const createClient = function(){
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

const updateClient = function(req,res){
  Client.update(
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

const deleteClient = function(req,res){
  Client.destroy({
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

module.exports = {getAll,getOne,updateClient,deleteClient,createClient}