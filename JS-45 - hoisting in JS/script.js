"use strict";

// *  Hoisting in JS
// ? Makes some types of variables accessible/usable in the code before they are actually declared. “Variables lifted to the top of their scope”.
// ? Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

console.log(me); // ? undefined
// console.log(job); // ! Cannot access 'job' before initialization TDZ 'temporal dead zone'
// console.log(birthYear); // ! Cannot access 'birthYear' before initialization TDZ 'temporal dead zone'

var me = "Frank";
let job = "Student";
const birthYear = 1991;
