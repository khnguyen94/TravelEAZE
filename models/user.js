// Create a "User" model that matches up with the database
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING
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
