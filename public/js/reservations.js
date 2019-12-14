$(document).ready(function() {
  // Get references to page elements
  console.log("hello we are here");
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
    var newPost = {
      startDate: $departureDate.val().trim(),
      endDate: $returnDate.val().trim(),
      departureLoc: $departureCity.val(),
      arrivalLoc: $arrivalCity.val()
    };
    console.log(newPost);
    submitPost(newPost);
  });
  function submitPost(Post) {
    $.post("/api/reservations/", Post, function() {
      window.location.href = "/reservations";
    });
  }
});
