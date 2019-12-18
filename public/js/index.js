/* eslint-disable no-unused-vars */
// Get references to page elements
var $userLogin = $("#login-email-input");

// The API object contains methods for each kind of request we'll make
var API = {
  userLogin: function(userName) {
    return $.ajax({
      type: "GET",
      url: "api/user/" + userName
    });
  },
  getReservations: function(userName) {
    console.log("getting reservations");
    return $.ajax({
      url: "api/" + userName,
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

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

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
