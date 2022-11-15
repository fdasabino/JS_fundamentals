"use strict";

// * Primitives vs. Objects (Primitive vs. Reference Types)

// Primitive value
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);

// reference type points to the same object on the memory heap
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = "Davis";

console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// Copying Objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["alice", "Bob"],
};

const marriedJessica2 = Object.assign({}, jessica2);

// * first level mutation
marriedJessica2.lastName = "Davis";

// ! nested level mutation
marriedJessica2.family.push("Mary");
marriedJessica2.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", marriedJessica2);
