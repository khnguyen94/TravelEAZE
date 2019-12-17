$(document).ready(function() {
  // Get references to page elements
  var $departureCity = $("#departure-airport-input");
  var $arrivalCity = $("#destination-airport-input");
  var $departureDate = $("#departure-date");
  var $returnDate = $("#return-date");

  $("#reservation-submit").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (
      !$departureCity.val().trim() ||
      !$arrivalCity.val().trim() ||
      !$departureDate.val().trim() ||
      !$returnDate.val().trim()
    ) {
      return;
    }
    var newReservation = {
      startDate: $departureDate.val().trim(),
      endDate: $returnDate.val().trim(),
      departureLoc: $departureCity.val(),
      arrivalLoc: $arrivalCity.val()
    };
    submitReservation(newReservation);
  });
  function submitReservation(Reservation) {
    $.post("/api/reservations/", Reservation, function() {
      console.log("done res");
      window.location.href = "/flight";
    });
  }

  var getReservations;
  function getFlights() {
    $.get("/api/reservations", function(data) {
      console.log("Reservation info", data);
      getReservations = data;
      console.log("arrival location: " + data[0].arrivalLoc);
      $.get("/api/city/" + data[0].arrivalLoc, function(res) {
        console.log("result found");
        console.log(res);
        weatherObj.queryCity(res[0].airportCity, function(result) {
          console.log(result);
        });
      });
    });
  }
  getFlights();
});
