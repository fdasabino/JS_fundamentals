"use strict";

// * Looping arrays, breaking and continuing

const franksArray = ["Frank", "Sabino", 2022 - 1990, "Student", ["Michael", "Peter", "Steven"]];
const typesArray = [];

// ? loop will run until the array lenght is over
for (let i = 0; i < franksArray.length; i++) {
  typesArray[i] = typeof franksArray[i];
  console.log(franksArray[i], "==>", " type: ", typesArray[i]);
}

// ? adding all values together using a loop
// ? Calculating ages with a loop

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// * continue and break
// ? continue executes the loop according to a condition
console.log("========= CONTINUE ========");
for (let i = 0; i < franksArray.length; i++) {
  if (typeof franksArray[i] !== "string") continue;
  console.log(franksArray[i], typeof franksArray[i]);
}

// ? break terminates the loop according to a condition
console.log("========= BREAK =======");
for (let i = 0; i < franksArray.length; i++) {
  if (typeof franksArray[i] === "number") break;
  console.log(franksArray[i], typeof franksArray[i]);
}
