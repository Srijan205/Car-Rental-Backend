const db = require('../models');

const findAllCars = (req, res) => {
    db.car.findAll()
      .then((cars) => {
        res.status(200).json(cars);
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({
          message: "An error occurred while retrieving cars.",
        });
      });
  };
const findCarById =  async (req, res) => {
    try {
      const carId = req.params.id;
      // Use Sequelize to query the database for the car by ID
  
      const car = await db.Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      // Send the car details as JSON response
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
module.exports = {findAllCars, findCarById};