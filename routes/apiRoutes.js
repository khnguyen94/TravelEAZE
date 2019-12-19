// Import Express dependencies

// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Get all reservations
  app.get("/api/reservations", function(req, res) {
    console.log("trying user query");
    db.Reservation.findAll({}).then(function(dbReservation) {
      console.log(dbReservation);
      res.json(dbReservation);
    });
  });

  app.get("/api/city/:arrivalCity", function(req, res) {
    db.Airport.findAll({
      where: { airportAccronym: req.params.arrivalCity }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("api/translate", function(req, res) {
    db.Languages.findAll({ attribute: LanguageCode }).then(
      function(result) {
        res.json(result);
      }
    );
  });
  // Create a new reservations
  app.post("/api/reservations", function(req, res) {
    console.log(req.body);
    db.Reservation.create({
      startDate: req.body.startDate,
      departureLoc: req.body.departureLoc,
      arrivalLoc: req.body.arrivalLoc,
      price: req.body.price,
      airline: req.body.airline
    }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });

  // Delete a reservation by id
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
