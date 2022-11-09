"use strict";

// * Functions calling other functions
function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange...`;
  return juice;
}

console.log(fruitProcessor(2, 3));
