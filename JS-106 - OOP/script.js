"use strict";

// * 106 - OOP - Object Oriented programming

// * 1. new object {} is created
// * 2. function is called, this = {}
// * 3. linked to prototype
// * 4. function automatically returns {}

const Person = function (firstName, birthYear) {
  // * instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// * instances of Person
const frank = new Person("Frank", 1990);
console.log(frank);

const matilda = new Person("Matilda", 2017);
console.log(matilda);

const jack = new Person("Jack", 1975);
console.log(jack);

console.log(frank instanceof Person); // returns a boolean

// ! bad practice
// const Person = function (firstName, birthYear) {
//     instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

// !   (1) NEVER DO THIS => IMPACTS PERFORMANCE ON LARGER CODE BASES:
//     this.calcAge = () => {
//     console.log(2022 - this.birthYear);
//       };
//   };

// * Prototypes adds a method or a function in a object dynamically

// ? (1) DO THIS INSTEAD :
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

frank.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(frank.__proto__);
console.log(frank.__proto__ === Person.prototype);

// * prototype is easier to think of as the prototype of linked objects
console.log(Person.prototype.isPrototypeOf(frank));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

// * Setting properties to prototypes, (not directly set to the properties, but added to prototype) __proto__
Person.prototype.species = "Home Sapiens";

// * Check if "frank" has a certain own property
console.log(frank.hasOwnProperty("firstName"));
console.log(frank.hasOwnProperty("species"));

// * Prototypal Inheritance on Built-In Objects
console.log(frank.__proto__);

// ? Object.prototype (top prototype chain)
console.log(frank.__proto__.__proto__);
console.log(frank.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 9, 8, 6, 6, 7]; // new Array

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector("h1");

console.dir(h1);
console.dir((x) => x + 1);
