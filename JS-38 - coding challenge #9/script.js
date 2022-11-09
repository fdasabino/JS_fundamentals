"use strict";

// ! Coding challenge #9 - solve a porblem using Google, StackOverflow and MDN

// ! Problem 1
// We work for a company building a smart home termomether. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitute. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Unsdertanding the problem
// 1. What is temperature amplitude? Answer: difference highest and lowest temp
// 2. How to compute the max a min temperatures?
// 3. What's a sensor error? And what do we do?

// Breaking the problems into smaller chunks
// 1. How to ignore errors?
// 2. Find max temperature in temp array.
// 3. Find min temperature in temp array.
// 4. Subtract min from max (amplitute) and then return it.

const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// ! Problem 2
// Function should now receive 2 arrays of temps

// Understnding the problem
// 1. With 2 arrays, should we implement the fucntionality twice? Answer: NO just merge two arrays

const calcTempAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
