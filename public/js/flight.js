var airplane = require("../../config/airplane.js");
var token = airplane.token;

// Flight data API call
var flightAPI = {
  flightQuery: function() {
    var queryURL = "http://api.travelpayouts.com/v1/prices/cheap?origin=";
    queryURL += "SEA";
    queryURL += "&destination=";
    queryURL += "LAX";
    queryURL += "&token=";
    queryURL += token;

    $.ajax({
      url: queryURL,
      type: "GET"
    }).then(function(response) {
      console.log("response: " + response);
    });
  }
};

// var getFlight = function() {
//   flightAPI.flightQuery().then(function(response) {
//     console.log("response" + response);
//   });
// };

flightAPI.flightQuery();

// $("#submit").on("click", function() {
//   var originCity = $("#example-text").val().trim();
//   var destination = $("#example-description").val().trim();
//   console.log("origin, destination: " + originCity + "," + destination);
//   getFlight(originCity, destination);
// });
