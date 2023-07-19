const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');


const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image:{
    type:DataTypes.STRING,
    allowNull:true
  },
  role:{
    type:DataTypes.ENUM(['Client','Admin','Seller'])
  }
});



module.exports = User;
