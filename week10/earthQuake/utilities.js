function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

const getLocation = function(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

export {getJSON, getLocation}