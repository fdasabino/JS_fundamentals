"use strict";

// *  the THIS keyword
// ? this keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the “owner” of the function in which the this keyword is used.

console.log(this); // returns global window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // returns undefined in strict mode
};
calcAge(1990);

// ! Arrow functions do not get their on THIS keyword, it uses it's parent lexical scope
const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); // returns window object in strict mode
};
calcAgeArrow(1990);

const person = {
  name: "Frank",
  birthYear: 1990,
  calcAge: function () {
    console.log(this); // returns the object person
    console.log(2022 - this.birthYear);
  },
};
person.calcAge();

const person2 = {
  birthYear: 2000,
};

// method borrowing
person2.calcAge = person.calcAge;
person2.calcAge();
