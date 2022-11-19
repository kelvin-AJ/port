import { getJSON, getLocation } from "./utilities.js";

const baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-03-02"

// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100

const testGetQuakesForLocation = function() {
    getLocation()
    .then(location => {
        const {latitude, longitude} = location.coords;
        const quakesJSON = getJSON(`${baseUrl}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`);
        console.log(quakesJSON)

    })
}

testGetQuakesForLocation()