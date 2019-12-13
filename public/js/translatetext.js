var keys = require("./keys.js");
var apiKey = keys.rapidapi;
var sourcelang = $("source").val();
var transtext = $("text").val();
var targetlang = $("lang").val();

var transfunc = function() {
  var translateapi = {
    async: true,
    crossDomain: true,
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    method: "POST",
    headers: {
      "x-rapidapi-host": "google-translate1.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
      "content-type": "application/x-www-form-urlencoded"
    },
    data: {
      source: sourcelang,
      q: transtext,
      target: targetlang
    }
  };

  $.ajax(translateapi).done(function(response) {
    console.log(response);
    return response;
  });
};
transfunc();
