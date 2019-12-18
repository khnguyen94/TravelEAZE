$("#reservation-submit").on("click", function(e) {
  e.preventDefault();
  console.log("submit clicked!");
  var newFlight = {
    originCity: $("#departure-airport-input")
      .val()
      .trim(),
    destination: $("#destination-airport-input")
      .val()
      .trim(),
    departDate: $("#departure-date")
      .val()
      .trim(),
    returnDate: $("#return-date")
      .val()
      .trim()
  };

  $.ajax("/flight", {
    type: "POST",
    data: newFlight
  }).then(function(response) {
    console.log("resposne recieved");
    console.log(response);
    console.log(response.searchResult.length);
    console.log(
      "origin, destination: " +
        newFlight.originCity +
        "," +
        newFlight.destination
    );
    $("#flight-result-row").empty();
    var flightsToAdd = [];
    for (var i = 0; i < response.searchResult.length; i++) {
      flightsToAdd.push(createNewCard(response.searchResult[i]));
    }
    $("#flight-result-row").append(flightsToAdd);
  });
});

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
  airlineTitle.text("Airline: " + flight.airline);
  var departureTimePar = $("<p>");
  departureTimePar.addClass("card-text");
  departureTimePar.text("Departure Date : ");
  var departureTimeSpan = $("<span>");
  departureTimeSpan.addClass("departureDate");
  departureTimeSpan.text(flight.departure_at);
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
  departureCitySpan.text(
    $("#departure-airport-input")
      .val()
      .trim()
  );
  var arrivalCityPar = $("<p>");
  arrivalCityPar.addClass("card-text");
  arrivalCityPar.text("Arrival Airport : ");
  var arrivalCitySpan = $("<span>");
  arrivalCitySpan.addClass("destination");
  arrivalCitySpan.text(
    $("#destination-airport-input")
      .val()
      .trim()
  );
  var saveBtn = $("<button>");
  saveBtn.text("Save");
  saveBtn.addClass("btn btn-primary savebtn");
  saveBtn.attr("href", "#");

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
  newFlightCardBody.append(saveBtn);
  return newFlightCol;
}
