"use strict";

// *  Immediately Invoked Function Expressions
const runOnCall = function () {
  console.log("this will run every time I call it");
};
runOnCall();
runOnCall();
runOnCall();
runOnCall();
runOnCall();

// IIFE
(function () {
  console.log("this will only run once");
  const privateData = "private data";
  console.log(privateData);
})(); //invoked directly after;
