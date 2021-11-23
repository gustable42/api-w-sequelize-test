'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Customer, {foreignKey: 'customerId', as: 'customer'});
    }
  };
  Appointment.init({
    datetime: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};