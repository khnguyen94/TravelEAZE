// Create a "Airport" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var Airport = sequelize.define("Airport", {
    airportID: DataTypes.STRING,
    airportName: DataTypes.STRING
  });
  return Airport;
};
