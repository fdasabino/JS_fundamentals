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
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
