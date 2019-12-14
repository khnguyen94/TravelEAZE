var token = "cc7c579e01128b0ff6432c6ab83573fa";

// Flight data API call
var flightAPI = {
  flightQuery: function(originCity, destination) {
    var queryURL = "http://api.travelpayouts.com/v1/prices/cheap?origin=";
    queryURL += originCity;
    queryURL += "&destination=";
    queryURL += destination;
    queryURL += "&token=";
    queryURL += token;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log("response" + response);
    });
  }
};

// var getFlight = function(originCity, destination) {
//   flightAPI.flightQuery(originCity, destination).then(function(response) {
//     console.log("response" + response);
//   });
// };

/*
$("#reservation-submit").on("click", function(e) {
  e.preventDefault();
  console.log("submit clicked!");
  var originCity = $("#departure-airport-input").val().trim();
  var destination = $("#destination-airport-input").val().trim();
  console.log("origin, destination: " + originCity + "," + destination);
  flightAPI.flightQuery(originCity, destination);
});
*/
