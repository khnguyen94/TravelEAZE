$("#reservation-submit").on("click", function(e) {
  e.preventDefault();
  console.log("submit clicked!");
  var newFlight = {
    originCity: $("#departure-airport-input").val().trim(),
    destination: $("#destination-airport-input").val().trim(),
    departDate: $("#departure-date").val().trim(),
    returnDate: $("return-date").val().trim()
  };

  $.ajax("/flight", {
    type: "POST",
    data: newFlight
  }).then(function() {
    console.log("origin, destination: " + originCity + "," + destination);
  });
});
