"use strict";

// * First-Class and Higher-Order Functions // Functions Accepting Callback Functions

// ? JS treats functions as first class citizens, meaning functions are simply
// ? values. In another words functions are just another "type" of obj.

const oneWord = (str) => {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//* Higher order function
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

// Callback functions, allow us to create abstraction.
const high5 = () => {
  console.log("👋👋👋");
};

document.body.addEventListener("click", high5);
["Frank", "Kevin", "Ester"].forEach(high5);
