"use strict";

// * Introduction to Arrays

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yearsToCome = new Array(1991, 1985, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const firstName = "Frank";

const frank = [firstName, "Sabino", 2022 - 1990, "student", friends];
console.log(frank);
console.log(frank.length);

// ! exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
console.log(years);

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[3]));
console.log(calcAge(years[years.length - 1]));

const ages = [calcAge(years[0]), calcAge(years[1])];
calcAge(years[years.length - 1]);
console.log(ages);
