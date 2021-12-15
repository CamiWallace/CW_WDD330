import {dailyWeatherForcast} from './daily.js';
import {displayDailyWeather} from './daily.js';
import {weeklyWeatherData} from './weekly.js';
import { displayWeeklyWeather } from './weekly.js';

const key = '2bbe074d1939e866583cabd542d83b87'; 
let long;
let lat;
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

function myLocation(){
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+key)
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        //call function to print weather to user
        dailyForcast();
        displayDailyWeather(data);
    });
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
function fetchForcast(){
    let city = document.getElementById('city').value; 
    let state = document.getElementById('state').value; 
    console.log(city, state, key);
    let dailyData = dailyWeatherForcast(city, state, key);
    displayDailyWeather(dailyData);
    dailyForcast();
}

function getweeklyForcast(){
    let city = document.getElementById('city').value; 
    let state = document.getElementById('state').value;
    let weeklyData = weeklyWeatherData(city, state, key);
    displayWeeklyWeather(weeklyData);
    weeklyForcast();
}



