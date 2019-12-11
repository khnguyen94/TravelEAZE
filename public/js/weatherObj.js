var keys = require("../../config.js");
var apiKey = keys.WEATHER_KEY;

var weatherObj = {
    queryCity : function(city, country) {
        var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=imperial`;
        //Call weather API with the above URL.
        // Using GET because we want to get info from the API call.
        $.ajax({
            url: weatherUrl,
            method: 'GET'
        }).then((response) => {
            console.log('Api has been called.');
            let weatherData = {
                temperature : response.main.temp,
                description : response.weather[0].description,
                icon : response.weather[0].icon
            };
            console.log(weatherData);
            return weatherData;
        })
    }
}

weatherObj.queryCity("chicago", "usa");


//module.exports = weatherObj;