// Create a "Reservation" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    startDate: DataTypes.DATEONLY,
    departureLoc: DataTypes.STRING,
    arrivalLoc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    airline: DataTypes.STRING
  });

  //future development code
/*  Reservation.associate = function(models) {
    // We're saying that a Reservation should belong to a User
    // A Reservation can't be created without a User due to the foreign key constraint
    Reservation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
*/
  return Reservation;
};
