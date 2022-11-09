"use strict";

// * Strict mode
// * Eliminates some JavaScript silent errors by changing them to throw errors.
// * Fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
// * strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// * Prohibits some syntax likely to be defined in future versions of ECMAScript.

let hasDriveLicense = false;
const passTest = true;

if (passTest) {
  hasDriveLicense = true;
  console.log("Hi I can drive");
}

// !Reserved word
//! const interface = "audio";
//! const private = 553
