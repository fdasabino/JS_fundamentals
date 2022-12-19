"use strict";

// * 134 - Other Promise Combinators: race, allSettled and any

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

// const [[data1], [data2], [data3]] = await Promise.all([
//   getJson(`https://restcountries.com/v2/name/${c1}`),
//   getJson(`https://restcountries.com/v2/name/${c2}`),
//   getJson(`https://restcountries.com/v2/name/${c3}`),
// ]);

// * Promises.race
// The Promise.race() method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v2/name/mexico`),
    getJson(`https://restcountries.com/v2/name/egypt`),
    getJson(`https://restcountries.com/v2/name/panama`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

Promise.race(
  [getJson(`https://restcountries.com/v2/name/panama`)],
  timeout(5)
    .then((res) => console.log(res[0]))
    .catch((err) => console.error(err))
);

// * Promises.allSettled
// The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// * Promises.any [ES2021]
// The Promise.any() method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another Success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
