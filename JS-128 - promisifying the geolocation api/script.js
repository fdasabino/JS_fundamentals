"use strict";

// * 128 -  Promisifying the Geolocation API

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  const ApiUrl = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=114516648065121e15717942x33866`;
  return getJson(ApiUrl, "Problem with geocoding...")
    .then((data) => {
      console.log(data);
      const { country } = data;
      const { city } = data;
      console.log(`You are in ${city}, ${country} `);
    })
    .catch((err) => {
      console.error(`${err.message}`);
    });
};

console.log("Getting position");
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition()
  .then((pos) => {
    const { latitude, longitude } = pos.coords;
    console.log(latitude, longitude);
    whereAmI(latitude, longitude);
  })
  .catch((err) => {
    if (err.code === 1) {
      console.error("You need to allow geolocation API...", err.message);
    }
  });
