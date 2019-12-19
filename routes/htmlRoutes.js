/* eslint-disable no-unused-vars */
var db = require("../models");
var axios = require("axios");
var airplane = require("../config/airplane.js");
var token = airplane.token1;
var keys = require("../config/keys.js");
var apiKey = keys.googlekey;

module.exports = function(app) {
  app.post("/flight", function(req, res) {
    console.log(
      "req.body: " + req.body.originCity + "," + req.body.destination
    );
    var originCity = req.body.originCity;
    var destination = req.body.destination;
    var departureDate = req.body.departDate;
    var returnDate = req.body.returnDate;

    var queryURL =
      "http://api.travelpayouts.com/v1/prices/cheap?currency=USD&origin=";
    queryURL += originCity;
    queryURL += "&destination=";
    queryURL += destination;
    // queryURL += "&depart_date=";
    // queryURL += departureDate;
    // queryURL += "&return_date=";
    // queryURL += returnDate;
    queryURL += "&token=";
    queryURL += token;
    console.log(queryURL);

    var handle;

    axios.get(queryURL).then(function(response) {
      // console.log("res: " + JSON.stringify(response.data.data));
      // console.log(
      //   "result: " +
      //     Object.values(Object.values(response.data.data)[0])[0].price
      // );
      handle = {
        searchResult: Object.values(Object.values(response.data.data)[0])
      };
      console.log(handle);
      res.send(handle);
      // res.json({ searchResult: searchResult });
    });
  });

  app.post("/translate", function(req, res) {
    var sourcelang = req.body.sourcelang;
    var transtext = req.body.transtext;
    var targetlang = req.body.targetlang;
    
    axios({
      "method": "POST",
      "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }, "data": {
        "source": sourcelang,
        "q": transtext,
        "target": targetlang
      }
    })
      .then((response) => {
        console.log(response.data)
        res.json(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    });

  // Load index page
  // module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/flight", function(req, res) {
    res.render("reservations");
    console.log("page rendered!");
  });

  app.get("/flight", function(req, res) {
    res.render("reservations");
    console.log("page rendered!");
  });

  app.get("/translate", function(req, res) {
    res.render("translations");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
