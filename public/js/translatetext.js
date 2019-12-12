var keys = require("../../config.js");
var apiKey = keys.LANG_KEY;
var sourcelang = "";
var transtext = "";
var targetlang = "";

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
