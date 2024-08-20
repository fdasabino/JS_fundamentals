"use strict";

// * 124 -  Promises and the Fetch API - Consuming promises .then() syntax
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (errorMsg) {
  countriesContainer.insertAdjacentText("beforeend", errorMsg);
  // countriesContainer.style.opacity = 1;
};

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  const URL = `https://restcountries.com/v2/name/${country}`;

  // Country 1
  return getJson(URL, "Country not found")
    .then((data) => {
      renderCountry(data[0]);

      // Country 2
      const neighbor = data[0].borders?.[0];
      const URL2 = `https://restcountries.com/v2/alpha/${neighbor}`;
      if (!neighbor) throw new Error("No neighbour found");
      return getJson(URL2, "Country not found");
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", () => {
  getCountryData("brazil");
});
