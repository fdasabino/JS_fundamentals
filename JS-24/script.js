"use strict";

// * Reviewing functions

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
console.log(calcAge(1990));

const yearsToRetire = function (birthYear, firstName) {
  const currentAge = 2022 - birthYear;
  const retirement = 65 - currentAge;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years...`;
  } else {
    return `${firstName} is already retired...`;
  }
};

console.log("Years to retire: ", yearsToRetire(1990, "Frank"));
