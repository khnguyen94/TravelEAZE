// Import Express dependencies
var express = require("express");
var router = express.Router();

// Requiring our models
var db = require("../models");

// Get all reservations
router.get("/api/reservations", function(req, res) {
  db.Reservation.findAll({}).then(function(result) {
    res.json(result);
  });
});

// Create a new reservations
router.post("/api/reservations", function(req, res) {
  db.Reservation.create(req.body).then(function(result) {
    res.json(result);
  });
});

// Delete an reservations by id
router.delete("/api/reservations/:id", function(req, res) {
  db.Reservation.destroy({ where: { id: req.params.id } }).then(function(
    result
  ) {
    res.json(result);
  });
});
