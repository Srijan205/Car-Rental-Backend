const { findAllCars, findCarById } = require('../service/car.service');


// Retrieve all cars from the database
const getAllCars = (req, res) => {
  return findAllCars(req, res);
}

const getCarDetails = (req, res) => {
  return findCarById(req, res);
}

module.exports =  {getAllCars, getCarDetails};
