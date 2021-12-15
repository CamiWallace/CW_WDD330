export function dailyWeatherForcast(city, state, key){
    //make call to the weather API
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +',' + state + '&appid=' + key)
    
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        //return data in an object
        return(data);
    });
}

export function displayDailyWeather(d){
        //equations for both Celcius and Fahrenheit
        var celcius = Math.round(parseFloat(d.main.temp)-273.15); console.log(celcius);
        var fahrenheit = celcius * (9/5) + 32;
        var temp_min_c = Math.round(parseFloat(d.main.temp_min)-273.15);
        var temp_min_f = temp_min_c * (9/5) + 32;
        var temp_max_c = Math.round(parseFloat(d.main.temp_max)-273.15);
        var temp_max_f = temp_max_c * (9/5) + 32;
    
        //write your weather forcast to the screen
        document.getElementById('display_desc').innerHTML = d.weather[0].description; 
        document.getElementById('display_temp').innerHTML = fahrenheit + '&deg;';
        document.getElementById('display_city').innerHTML = d.name;
        document.getElementById('today_high').innerHTML = 'Todays High: '+ temp_max_f + '&deg;';
        document.getElementById('today_low').innerHTML = 'Todays Low: '+ temp_min_f + '&deg;';

}