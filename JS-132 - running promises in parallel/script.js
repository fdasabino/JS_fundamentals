"use strict";

// * 132 - Running promises in parallel

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const [[data1], [data2], [data3]] = await Promise.all([
      getJson(`https://restcountries.com/v2/name/${c1}`),
      getJson(`https://restcountries.com/v2/name/${c2}`),
      getJson(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data1.capital, data2.capital, data3.capital);
  } catch (error) {
    console.error(error);
  }
};

get3Countries("sweden", "brazil", "usa");
