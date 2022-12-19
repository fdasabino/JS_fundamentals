"use strict";

// * 132 - Error Handling with Try-Catch

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geo Location
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    // Reverse Geocoding
    const URL1 = `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=114516648065121e15717942x33866`;

    const resGeo = await fetch(URL1);
    if (!resGeo.ok) throw new Error("Problem fetching data...");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const URL2 = `https://restcountries.com/v2/name/${dataGeo.country}`;
    const res = await fetch(URL2);
    const data = await res.json();
    console.log(data);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(`Something went wrong: ${error.message}`);
  }
};

console.log("Will get location");
// whereAmI()
//   .then((city) => console.log(city))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Location found!"));

// IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (error) {
    console.error(error);
  }
  console.log("Location found!");
})();
