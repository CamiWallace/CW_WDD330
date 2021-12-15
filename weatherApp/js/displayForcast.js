export{displayDailyForcast,
    displayWeeklyForcast
}

function displayDailyForcast(data){
    //equations for both Celcius and Fahrenheit
    var celcius = Math.round(parseFloat(d.main.temp)-273.15); console.log(celcius);
    var fahrenheit = celcius * (9/5) + 32;
    var temp_min_c = Math.round(parseFloat(d.main.temp_min)-273.15);
    var temp_min_f = temp_min_c * (9/5) + 32;
    var temp_max_c = Math.round(parseFloat(d.main.temp_max)-273.15);
    var temp_max_f = temp_max_c * (9/5) + 32;
    var icon_code = d.weather[0].icon;
    console.log('icon = ', icon_code)

    //write your weather forcast to the screen
    document.getElementById('display_desc').innerHTML = d.weather[0].description; 
	document.getElementById('display_temp').innerHTML = fahrenheit + '&deg;';
	document.getElementById('display_city').innerHTML = d.name;
    document.getElementById('today_high').innerHTML = 'Todays High: '+ temp_max_f + '&deg;';
    document.getElementById('today_low').innerHTML = 'Todays Low: '+ temp_min_f + '&deg;';
    document.getElementById('dailyImg').src ='http://openweathermap.org/img/wn/'+ icon_code +'@2x.png';
}

function displayWeeklyForcast(d){
    let weatherDescription0 = d.list[3].weather[0].description;
    let avTemperature0 = Math.round(parseFloat(d.list[3].main.temp)-273.15);
    let icon0 = d.list[3].weather[0].icon;
    let weatherDescription1 = d.list[11].weather[0].description;
    let avTemperature1 = Math.round(parseFloat(d.list[11].main.temp)-273.15);
    let icon1 = d.list[11].weather[0].icon;
    let weatherDescription2 = d.list[19].weather[0].description;
    let avTemperature2 = Math.round(parseFloat(d.list[19].main.temp)-273.15);
    let icon2 = d.list[19].weather[0].icon;
    let weatherDescription3 = d.list[27].weather[0].description;
    let avTemperature3 = Math.round(parseFloat(d.list[27].main.temp)-273.15);
    let icon3 = d.list[27].weather[0].icon;
    let weatherDescription4 = d.list[35].weather[0].description;
    let avTemperature4 = Math.round(parseFloat(d.list[35].main.temp)-273.15);
    let icon4 = d.list[35].weather[0].icon;

    document.getElementById('day1').innerHTML = avTemperature0  + '&deg;';;
    document.getElementById('day1Description').innerHTML = weatherDescription0;
    document.getElementById('img1').src = 'http://openweathermap.org/img/wn/'+ icon0 +'@2x.png';
    document.getElementById('day2').innerHTML = avTemperature1  + '&deg;';;
    document.getElementById('day2Description').innerHTML = weatherDescription1;
    document.getElementById('img2').src = 'http://openweathermap.org/img/wn/'+ icon1 +'@2x.png';
    document.getElementById('day3').innerHTML = avTemperature2  + '&deg;';;
    document.getElementById('day3Description').innerHTML = weatherDescription2;
    document.getElementById('img3').src = 'http://openweathermap.org/img/wn/'+ icon2 +'@2x.png';
    document.getElementById('day4').innerHTML = avTemperature3  + '&deg;';;
    document.getElementById('day4Description').innerHTML = weatherDescription3;
    document.getElementById('img4').src = 'http://openweathermap.org/img/wn/'+ icon3 +'@2x.png';
    document.getElementById('day5').innerHTML = avTemperature4  + '&deg;';;
    document.getElementById('day5Description').innerHTML = weatherDescription4;
    document.getElementById('img5').src = 'http://openweathermap.org/img/wn/'+ icon4 +'@2x.png';
}