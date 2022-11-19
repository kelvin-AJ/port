import { getJSON, getLocation } from "./utilities.js";

const baseUrl ="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02";
let quakes = [];

async function getQuakesForLocation(location, radius=100){
    const URL = `${baseUrl}&latitude=${location.latitude}&longitude=${location.longitude}&maxradiuskm=${radius}`
    
    return getJSON(URL);   
}

async function initPos() {
    let locResp = await getLocation();
    
    return locResp.coords;
}

function generateListMarkup(features, templateCallback) {
    const listHtml = templateCallback(features);
    
    return listHtml.join("");
}

function earthquakeListTemplate(data){
    
  return data.map(quake => `${quake.properties.title} ${new Date(quake.properties.time)}`)
}

function earthQuakeClickHandler(event){
    const quakeId = event.target.dataset.id;
    const quake = quakes.features.find((item) => item.id === quakeId);
    const detailsElement = document.querySelector("#quakeDetails");
    const quakeProperties = Object.entries(quake.properties);
    detailsElement.innerHTML = quakeProperties
      .map((item) => {
        if (item[0] === "time" || item[0] === "updated") {
          return `${item[0]}: ${new Date(item[1])}`;
        } else return `${item[0]}: ${item[1]}`;
      })
      .join("");
}


async function showQuakes() {
  // get location
  const location = initPos();
  // GET AND RENDER QUAKES
  quakes = await getQuakesForLocation(location);
  console.log(quakes.features)

  // render the list to the list element
  const listElement = document.querySelector("#quakeList");
  listElement.innerHTML = generateListMarkup(
    quakes.features,
    earthquakeListTemplate
  );

  // attach a listener to the quakes that will listen for a click and render out details about the quake
  listElement.addEventListener("click", earthQuakeClickHandler);
}

showQuakes()

// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    const URL = `${this.baseUrl}&latitude=${position.latitude}&longitude=${position.longitude}&maxradiuskm=${radius}`
    
    this._quakes = getJSON(URL);   

    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}