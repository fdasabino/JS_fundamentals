"use strict";

// * 110 - Static methods

// ? The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// ? Array constructor method (not valid for its prototype [])

const arr = Array.from(document.querySelectorAll("h1"));
console.log(arr);

// [1,2,3,4].from() does not work
