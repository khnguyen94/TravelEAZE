$("#reservation-submit").on("click", function(e) {
  e.preventDefault();
  console.log("submit clicked!");
  var newFlight = {
    originCity: $("#departure-airport-input").val().trim(),
    destination: $("#destination-airport-input").val().trim()
  };

  $.ajax("/flight", {
    type: "POST",
    data: newFlight
  }).then(function() {
    console.log("origin, destination: " + originCity + "," + destination);
  });
});
