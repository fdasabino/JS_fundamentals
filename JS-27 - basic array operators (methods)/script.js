"use strict";

// * Basic Array Operators (methods)

const friends = ["Michael", "Steven", "Peter"];

// ? adds to the end of the array
friends.push("Jay");
console.log(friends);

// ? adds to the beginning of the array
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

const fruits = ["apple", "banana", "mango", "orange", "pear"];

// slice() → does NOT change the original array
// - Returns a shallow copy of a portion of an array, from start index up to (but not including) end index.
// - The original array stays the same.
// - You can store the result in a new variable since it returns a brand-new array.

const slicedFruits = fruits.slice(1);
console.log("Slice", slicedFruits);

// splice() → DOES change the original array
// - Removes, replaces, or adds elements directly in the array.
// - The original array is modified in place.
// - The returned value is an array of the removed elements (if any), which you can also save to a variable.

fruits.splice(1, 1); //
console.log("Splice", fruits);
