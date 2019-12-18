$(document).ready(function() {
  $("#submitTranslationButton").on("click", function(e) {
    e.preventDefault();
    var newTrans = {
      sourcelang: $("#sourceLanguage").val(),
      transtext: $("#needTranslation")
        .val()
        .trim(),
      targetlang: $("#targetLanguage").val()
    };

    $.ajax("/translate", {
      type: "POST",
      data: newTrans
    }).then(function() {
      console.log(
        "Source Language, target language: " + sourcelang + "," + targetlang
      );
    });
  });
  $("#sourceLanguage").on("input", autocomplete);
  $("#targetLanguage").on("input", autocomplete);
});
getlanguage();
