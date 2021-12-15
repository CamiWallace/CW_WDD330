export{getCoordinates,
       getDailyForcastFromGeolocation,
       getDailyForcastFromCityState,
       getWeeklyDataForGeolocationAndCityState,
       dailyForcastData,
       weeklyForcastData, 
       geolocationData}

const key = '2bbe074d1939e866583cabd542d83b87'; 
let long;
let lat;
let city;
let state; 
let geolocationData;
let dailyForcastData;
let weeklyForcastData;

//gets coordinates for geolocation
function getCoordinates(){
    window.addEventListener('load', ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            document.getElementById('myLocationBtn').style.display="block";
        })
        }else{
         alert("Geolocation will be unusible without proper permissions.");
        }
    })
    
}

//retrieves data for daily forcast from geolocation
function getDailyForcastFromGeolocation(){
    fetch('HTTPS://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+key)
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        geolocationData = data;       
    });
}

function getDailyForcastFromCityState(city, state){
    fetch('HTTPS://api.openweathermap.org/data/2.5/weather?q='+ city +',' + state + '&appid=' + key) 
    //convert the data to JSON
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        dailyForcastData = data;
    });
}

function getWeeklyDataForGeolocationAndCityState(city, state){
    if(city != null && city != '' && state != null && state != ''){
        fetch('HTTPS://api.openweathermap.org/data/2.5/forecast?q='+city+'&lon='+state+'&appid='+key)
        //convert the data to JSON
        .then(function(resp) {return resp.json()})
        .then(function(data){
            console.log('Weekly Data');
            console.log(data);
            weeklyForcastData = data;
        });
    }else{
        fetch('HTTPS://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&appid='+key)
        //convert the data to JSON
        .then(function(resp) {return resp.json()})
        .then(function(data){
            console.log('Weekly Data');
            console.log(data);
            weeklyForcastData = data;
        });
    }
}