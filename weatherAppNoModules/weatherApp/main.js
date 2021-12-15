const key = '2bbe074d1939e866583cabd542d83b87'; 
let long;
let lat;
let geoData;
let city;
let state; 

window.addEventListener('load', ()=>{  
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            document.getElementById('myLocationBtn').style.display="block";
        })
    }else{
        homeContent();
    }
})

function useMyLocation(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+key)
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        geoData = data;
        //call function to print weather to user
        displayWeather(data);
    })
}

function fetchForcast(){
    let city = document.getElementById('city').value; 
    let state = document.getElementById('state').value; 
    console.log(city, state, key);
    //make call to the weather API
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +',' + state + '&appid=' + key)  
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        //call function to print weather to user
        displayWeather(data);
    })
}

function getWeeklyWeatherData(){
    let city = document.getElementById('city').value; 
    let state = document.getElementById('state').value;
    if(city != null && city != '' && state != null && state != ''){
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&lon='+state+'&appid='+key)
        //convert the data to JSON
        .then(function(resp) {return resp.json()})
        .then(function(data){
            console.log(data);
            //call function to print weather to user
            console.log('Weekly Data');
            weeklyForcast();
            displayWeeklyWeather(data);
        })
    }else{
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&appid='+key)
        //convert the data to JSON
        .then(function(resp) {return resp.json()})
        .then(function(data){
            console.log(data);
            //call function to print weather to user
            console.log('Weekly Data');
            weeklyForcast();
            displayWeeklyWeather(data);
        })
    }
}

function displayWeather(d){
    //display the daily weather section
    dailyForcast();
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
    document.getElementById('dailyImg').src ='https://openweathermap.org/img/wn/'+ icon_code +'@2x.png';
}

function displayWeeklyWeather(d){
    console.log(d);
    weeklyForcast();
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
    document.getElementById('img1').src = 'https://openweathermap.org/img/wn/'+ icon0 +'@2x.png';
    document.getElementById('day2').innerHTML = avTemperature1  + '&deg;';;
    document.getElementById('day2Description').innerHTML = weatherDescription1;
    document.getElementById('img2').src = 'https://openweathermap.org/img/wn/'+ icon1 +'@2x.png';
    document.getElementById('day3').innerHTML = avTemperature2  + '&deg;';;
    document.getElementById('day3Description').innerHTML = weatherDescription2;
    document.getElementById('img3').src = 'https://openweathermap.org/img/wn/'+ icon2 +'@2x.png';
    document.getElementById('day4').innerHTML = avTemperature3  + '&deg;';;
    document.getElementById('day4Description').innerHTML = weatherDescription3;
    document.getElementById('img4').src = 'https://openweathermap.org/img/wn/'+ icon3 +'@2x.png';
    document.getElementById('day5').innerHTML = avTemperature4  + '&deg;';;
    document.getElementById('day5Description').innerHTML = weatherDescription4;
    document.getElementById('img5').src = 'https://openweathermap.org/img/wn/'+ icon4 +'@2x.png';
}

function homeContent() {
    document.getElementById('daily').style.display="none";
    document.getElementById('weekly').style.display="none";
    document.getElementById('homeDiv').style.display="block";
}
//function to display the daily forcast
function dailyForcast(){
    document.getElementById('daily').style.display="block";
    document.getElementById('weekly').style.display="none";
    document.getElementById('homeDiv').style.display="none";  
}
//function to display weekly forcast
function weeklyForcast(){
    document.getElementById('daily').style.display="none";
    document.getElementById('weekly').style.display="block";
    document.getElementById('homeDiv').style.display="none";
}


