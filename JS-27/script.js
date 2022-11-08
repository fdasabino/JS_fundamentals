"use strict";

// * Basic Array Operators (methods)

const friends = ["Michael", "Steven", "Peter"];

// ? adds to the end of the array
friends.push("Jay");
console.log(friends);

// ? adds to the beggining of the array
friends.unshift("Frank");
console.log(friends);

// ? remove the last element from the array
friends.pop();
console.log(friends);

const popped = friends.pop();
console.log(popped);

// ? remove the first element from the array
friends.shift();
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

// ? returns the index number of the element
console.log(friends.indexOf("Steven"));

// ? returns a boolean value
console.log(friends.includes("Steven"));

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}
