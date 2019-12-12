// Create a "Reservation" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    travelerID: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    departureLoc: DataTypes.STRING,
    arrivalLoc: DataTypes.STRING
  });
  return Reservation;
};
