'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Appointment, {foreignKey: 'customerId', as: 'customer'});
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};