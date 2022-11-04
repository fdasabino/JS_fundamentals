"use strict";

// * Function Declarations vs. Expressions

// ? declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

// ? expression
const calcAge2 = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
};

// ? invoking
const age1 = calcAge1(1990);
console.log(age1);

const age2 = calcAge2(1990);
console.log(age2);
