import{getCoordinates,
    getDailyForcastFromGeolocation,
    getDailyForcastFromCityState,
    getWeeklyDataForGeolocationAndCityState,
    dailyForcastData,
    weeklyForcastData, 
    geolocationData} from './helper.js';

import{displayDailyForcast,
    displayWeeklyForcast} from './displayForcast.js';

window.addEventListener('load', ()=>{  
    getCoordinates(); 
})

function useMyLocation(){
    getDailyForcastFromGeolocation();
    displayDailyWeather(geolocationData);   
}

function fetchForcast(){
    let city = document.getElementById('city').value; 
    let state = document.getElementById('state').value; 
    getDailyForcastFromCityState(city, state);
    console.log(city, state);
    displayDailyWeather(dailyForcastData);
}

function getWeeklyWeatherData(){
    let city = document.getElementById('city').value; 
    let state = document.getElementById('state').value;
    getWeeklyDataForGeolocationAndCityState(city, state);
    weeklyForcast();
    displayWeeklyWeather(weeklyForcastData);
}

function displayDailyWeather(d){
    dailyForcast();
    displayDailyForcast(d);
}

function displayWeeklyWeather(d){
    console.log(d);
    weeklyForcast();
    displayWeeklyForcast(d);
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


