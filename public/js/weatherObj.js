var apiKey = WEATHER_KEY;

var weatherObj = {
    queryCity : function(city, callBack) {
        var weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
        console.log(weatherUrl);
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
            return callBack(weatherData);
        })
    }
}
