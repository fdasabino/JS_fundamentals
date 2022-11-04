"use strict";

// * Arrow Functions

const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(1990);
console.log(age);

const yearsToRetire = (birthYear, firstName) => {
  const currentAge = 2022 - birthYear;
  const retirement = 65 - currentAge;
  return `${firstName} retires in ${retirement} years...`;
};

console.log("Years to retire: ", yearsToRetire(1990, "Frank"));
