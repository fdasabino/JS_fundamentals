"use strict";

// * 122 - Asynchronous JS

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  const URL = `https://restcountries.com/v2/name/${country}`;
  request.open("GET", URL);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data); //use this to study the data you want to use.

    // values Returns an array of values of the enumerable properties of an object
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);

    data.borders?.forEach((item) => {
      console.log(item);
      return item;
    });

    const html = `
      <article class="country">
      <img class="country__img" src= "${data.flags.svg}">
      <div class="country__data">
      <h3 class="country__name"> ${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <h6 class="country__region">${data.subregion}</h6>
        
        <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
          1
        )} million</p>         
          <p class="country__row"><span>🗣️</span>${languages[0].name}</p>
          <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          <p class="country__row"><span>🌆</span>${data.capital}</p>
          <p class="country__row"><span>📞</span> +${data.callingCodes}</p>
          </div>
    </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("sweden");
getCountryData("brazil");
