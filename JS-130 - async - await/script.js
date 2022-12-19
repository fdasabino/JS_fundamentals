"use strict";

// * 130 - Async - Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geo Location
  const position = await getPosition();
  const { latitude, longitude } = position.coords;

  // Reverse Geocoding
  const URL1 = `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=114516648065121e15717942x33866`;
  const resGeo = await fetch(URL1);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data
  const URL2 = `https://restcountries.com/v2/name/${dataGeo.country}`;
  const res = await fetch(URL2);
  const data = await res.json();
  console.log(data);
};
whereAmI();
console.log("runs first");
