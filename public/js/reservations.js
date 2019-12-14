$(document).ready(function() {
  // Get references to page elements
  var $departureCity = $("#departure-airport-input");
  var $arrivalCity = $("#destination-airport-input");
  var $departureDate = $("#departure-date-input");
  var $returnDate = $("#return-date-input");
  var resForm = $("#new-reservation");

  $(resForm).on("submit", function handleFormSubmit(event) {
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
    $.post("/api/resorts/", Post, function() {
      window.location.href = "/reservations";
    });
  }
});
