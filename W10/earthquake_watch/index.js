import { getJSON, getLocation } from 'utilities.js';
const baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
let quakes = [];
const raidus = 100;
let position;
const query = baseURL + position;
const listElement = document.querySelector("#quakeList");
console.log(query);


async function showQuakes() {
  const location = await initPos();
  quakes = await getQuakesForLocation(location);
  const listElement = document.querySelector("#quakeList");
  listElement.innerHTML = generateListMarkup(
    quakes.features,
    earthquakeListTemplate
  );
}
function initPos(){

}
function getQuakesForLocation(location){

}
function generateListMarkup(list, templateCallback){

}
function earthquakeListTemplate(data){

}
function earthquakeClickHandler(event){
  
}