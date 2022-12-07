"use strict";

// * PROGRAMMATICALLY Creating and Filling Arrays

// Array.from // constructor method // (_) throwaway variable
const arr = Array.from({ length: 50 }, (_, i) => {
  return i + 1;
});
console.log(arr);
