/* eslint-disable no-unused-vars */
// Get references to page elements
var $userLogin = $("#login-email-input");

function getPosts() {
  $.get("/api/reservations", function(data) {
    console.log("Reservations", data);
    Reservations = data;
    $("#reservation-result-row").empty();
    var reservationsToAdd = [];
    for (var i = 0; i < Reservations.length; i++) {
      reservationsToAdd.push(createNewCard(Reservations[i]));
    }
    $("#reservation-result-row").append(reservationsToAdd);
  });
}
getPosts();

function createNewCard(flight) {
  console.log("creating card");
  var newFlightCol = $("<div>");
  newFlightCol.addClass("col-sm-6");
  var newFlightCard = $("<div>");
  newFlightCard.addClass("card");
  var newFlightCardBody = $("<div>");
  newFlightCardBody.addClass("card-body");
  var airlineTitle = $("<h5>");
  airlineTitle.addClass("card-title");
  airlineTitle.addClass("airline");
  airlineTitle.text(flight.airline);
  var departureTimePar = $("<p>");
  departureTimePar.addClass("card-text");
  departureTimePar.text("Departure Date : ");
  var departureTimeSpan = $("<span>");
  departureTimeSpan.addClass("departureDate");
  departureTimeSpan.text(flight.startDate);
  var pricePar = $("<p>");
  pricePar.addClass("card-text");
  pricePar.text("Price (USD) : ");
  var priceSpan = $("<span>");
  priceSpan.addClass("price");
  priceSpan.text(flight.price);
  var departureCityPar = $("<p>");
  departureCityPar.addClass("card-text");
  departureCityPar.text("Departure Airport : ");
  var departureCitySpan = $("<span>");
  departureCitySpan.addClass("departureCity");
  departureCitySpan.text(flight.departureLoc);
  var arrivalCityPar = $("<p>");
  arrivalCityPar.addClass("card-text");
  arrivalCityPar.text("Arrival Airport : ");
  var arrivalCitySpan = $("<span>");
  arrivalCitySpan.addClass("destination");
  arrivalCitySpan.text(flight.arrivalLoc);

  newFlightCol.append(newFlightCard);
  newFlightCard.append(newFlightCardBody);
  newFlightCardBody.append(airlineTitle);
  newFlightCardBody.append(departureTimePar);
  departureTimePar.append(departureTimeSpan);
  newFlightCardBody.append(pricePar);
  pricePar.append(priceSpan);
  newFlightCardBody.append(departureCityPar);
  departureCityPar.append(departureCitySpan);
  newFlightCardBody.append(arrivalCityPar);
  arrivalCityPar.append(arrivalCitySpan);
  return newFlightCol;
}

//Future development code
/*
$("#login-submit").on("click", function handleFormSubmit(event) {
  event.preventDefault();
  console.log($userLogin.val());
  if (!$userLogin.val()) {
    alert("You must enter a valid user!");
    return;
  } else if ($userLogin.val().trim().length > 30) {
    alert("User name is too long, please shorten!");
    return;
  }

  if ($userLogin) {
    $userId = $userLogin
      .val()
      .trim()
      .toLowerCase();
  }

  console.log("submit clicked");
  API.getReservations($userId);
});
*/
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list

