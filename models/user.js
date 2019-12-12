// Create a "User" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    travelerID: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    homeAirport: DataTypes.STRING,
    reservation1ID: DataTypes.INTEGER,
    reservation2ID: DataTypes.INTEGER,
    reservation3ID: DataTypes.INTEGER,
    reservation4ID: DataTypes.INTEGER
  });

  // Associating User with Reservations
  User.associate = function(models) {
    // When an User is deleted, also delete any associated Reservations
    User.hasMany(models.Reservation, {
      onDelete: "cascade"
    });
  };

  return User;
};
