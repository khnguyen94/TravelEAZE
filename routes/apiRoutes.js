// Import Express dependencies

// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Get all reservations
  app.get("/api/:user", function(req, res) {
    console.log("trying user query");
    db.User.findAll({
      where: {
        userName: req.params.user
      },
      include: [db.Reservation]
    }).then(function(dbReservation) {
      console.log(dbReservation[0].dataValues.Reservations);
      if (dbReservation.length === 0) {
        console.log("adding user");
        db.User.create({ userName: req.params.user }).then(function(dbUser) {
          res.json({});
        });
      } else {
        res.json(dbReservation[0].dataValues.Reservations);
      }
    });
  });

  app.get("/api/city/:arrivalCity", function(req, res) {
    db.Airport.findAll({
      where: { airportAccronym: req.params.arrivalCity }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Create a new reservations
  app.post("/api/reservations", function(req, res) {
    console.log(req.body);
    db.Reservation.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      departureLoc: req.body.departureLoc,
      arrivalLoc: req.body.arrivalLoc
    }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });

  // Delete an reservations by id
  app.delete("/api/reservations/:id", function(req, res) {
    db.Reservation.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
