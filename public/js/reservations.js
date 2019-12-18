$(document).ready(function() {
  // $("#result-container").hide();
  // Get references to page elements

  $(".savebtn").on("click", function(event) {
    event.preventDefault();
    console.log("button clicked");
    var $departureCity = $("#departureCity");
    var $arrivalCity = $("#destination");
    var $departureDate = $("#departureDate");
    console.log("departure city : " + $departureCity.text());
    console.log("arrival city : " + $arrivalCity.text());
    console.log("departure date : " + $departureDate.text());
    // Wont submit the post if we are missing a body or a title
    if (
      !$departureCity.val().trim() ||
      !$arrivalCity.val().trim() ||
      !$departureDate.val().trim()
    ) {
      return;
    }
    var newReservation = {
      startDate: $departureDate,
      departureLoc: $departureCity.val().toUpperCase(),
      arrivalLoc: $arrivalCity.val().toUpperCase()
    };
    console.log(newReservation);
    //submitReservation(newReservation);
  });
  function submitReservation(Reservation) {
    $.post("/api/reservations/", Reservation, function() {
      console.log("done res");
      window.location.href = "/flight";
    });
  }

<<<<<<< HEAD
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
  //getFlights();
=======
  // var getReservations;
  // function getFlights() {
  //   $.get("/api/reservations", function(data) {
  //     console.log("Reservation info", data);
  //     getReservations = data;
  //     console.log("arrival location: " + data[0].arrivalLoc);
  //     $.get("/api/city/" + data[0].arrivalLoc, function(res) {
  //       console.log("result found");
  //       console.log(res);
  //       weatherObj.queryCity(res[0].airportCity, function(result) {
  //         console.log(result);
  //       });
  //     });
  //   });
  // }
  // getFlights();
>>>>>>> master
});
