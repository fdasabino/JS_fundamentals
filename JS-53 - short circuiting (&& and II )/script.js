"use strict";

// *  Short Circuiting (&& and ||)
// ? Use any data type
// ? Return any data type
// ? Short Circuitig evaluation

// and &&
console.log("&& ", 0 && "jonas");
console.log("&& ", 7 && "jonas");
console.log("&& ", "Hello" && 27 && null && "Frank");

// or ||
console.log("|| ", 3 || "frank");
console.log("|| ", "" || "frank");
console.log("|| ", true || 0);
console.log("|| ", undefined || null);

console.log("|| ", undefined || 0 || "" || "Hello" || 23 || null);
