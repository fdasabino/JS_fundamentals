"use strict";

// ! Coding challenge #10 - Debugging with the Console and Breakpoints

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: +prompt("Degrees celsius: "), // added a + operator before the prompt same as Number()
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
