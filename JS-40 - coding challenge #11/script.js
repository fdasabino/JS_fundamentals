"use strict";

// ! Coding challenge #11

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const days = [1, 2, 3, 4, 5, 6];

    const currentTemp = arr[i];
    const currentDay = days[i];

    if (arr[i] === currentTemp) {
      console.log(`The weather forecast is ...${currentTemp}℃ in ...${currentDay} days`);
    }
  }
};

printForecast(temperatures2);
