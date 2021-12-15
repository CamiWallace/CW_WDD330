export function weeklyWeatherData(city, state, key){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&lon='+state+'&appid='+key)
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log('Weekly Data', data);
        return (data);
    });
}

export function displayWeeklyWeather(d){
    weeklyForcast();
    for(let i=0; i<5; i++){
        //let weatherDescription = d.list[i].weather[i].description;
        let temperature = d.list[i].main.temp;
        let low_temp = d.list[i].main.temp_min;
        let high_temp = d.list[i].main.temp_max;
        let div = document.createElement('div');
        div.value = temperature;
        console.log( temperature, low_temp, high_temp);
        document.body.appendChild(div);
    }
}
