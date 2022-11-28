"use strict";

// * Simple array methods

// ? Slice method => Creates a new array without mutating the original array.

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2, 5)); // refers to the position in the array, not the value itself.
console.log(arr.slice(-5));
console.log(arr.slice(-1)); //-1 always the last element in the array.
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// ? Splice method => Mutates the original array.
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// ? Reverse method => Reverses the array order, mutates the original array.
const arr2 = ["e", "d", "c", "b", "a"];
arr2.reverse();
console.log(arr2);

// ? Concat method => Concatenate arrays, without mutating the original array.
const letters = arr.concat(arr2);
console.log(letters);

// ? Join method => Creates and returns a new string by concatenating all of the elements in an array
// ? separated by commas or a specified separator string
console.log(letters.join("- "));
