var db = require("../models");
var axios = require("axios");
// var airplane = require("../config/airplane.js");
// var token = airplane.token1;

// module.exports = function(app) {
//   app.post("/flight", function(req, res) {
//     console.log(
//       "req.body: " + req.body.originCity + "," + req.body.destination
//     );
//     var originCity = req.body.originCity;
//     var destination = req.body.destination;
//     var queryURL =
//       "http://api.travelpayouts.com/v1/prices/cheap?currency=USD&origin=";
//     queryURL += originCity;
//     queryURL += "&destination=";
//     queryURL += destination;
//     queryURL += "&token=";
//     queryURL += token;

//     axios.get(queryURL).then(function(response) {
//       console.log("result: " + response.data.LAX);
//       res.json(response.data);
//     });
//   });

// Load index page
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/flight", function(req, res) {
    res.render("reservations");
    console.log("page rendered!");
  });

  app.get("/translate", function(req, res) {
    res.render("translate");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
