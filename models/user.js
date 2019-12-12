// Create a "User" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    travelerID: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    homeAirport: DataTypes.STRING
  });
  return User;
};
