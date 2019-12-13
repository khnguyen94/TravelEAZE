// Create a "Airport" model that matches up with the database
const Sequelize = require('sequelize');

const sequelize = new Sequelize('travel_db', 'root', 'a-6Intruder', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = function(sequelize, DataTypes) {
  var Airport = sequelize.define("Airport", {
    airportName: DataTypes.STRING,
    airportCity: DataTypes.STRING,
    airportCountry: DataTypes.STRING,
    airportAccronym: DataTypes.STRING,
    airportAlternateAccronym: DataTypes.STRING,
    airportLatitude: DataTypes.DECIMAL,
    airportLongitude: DataTypes.DECIMAL,
    airportRandNum: DataTypes.INTEGER,
    airportTimeZoneNum: DataTypes.INTEGER,
    airportLetter: DataTypes.STRING,
    airportTimeZone: DataTypes.STRING,
    type: DataTypes.STRING,
    source: DataTypes.STRING
  },
  {
    timestamps : false
  });
  return Airport;
};
