'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Car extends Model {}

  Car.init({
    imageUrl: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    description:DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
    tableName: 'cars',
    timestamps: false
  });

  return Car;
};
