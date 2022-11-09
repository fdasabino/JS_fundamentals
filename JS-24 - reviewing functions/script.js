"use strict";

// * Reviewing functions

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsToRetire = function (birthYear, firstName) {
  const currentAge = calcAge(birthYear);
  const retirement = 65 - currentAge;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years...`;
  } else {
    return `${firstName} is already retired...`;
  }
};

console.log("Years to retire: ", yearsToRetire(1990, "Frank"));
