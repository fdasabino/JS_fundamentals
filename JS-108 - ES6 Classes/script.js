"use strict";

// * 107 - ES6 Classes

// * class expression
// > const PersonClass = class{}

// * class declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      console.log(name);
      this._fullName = name;
      console.log(`Hello ${name} and welcome to your account`);
    } else {
      console.log(`wrong name ${name} is not a valid name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const frank = new PersonClass("Frank Sabino", 1990);
console.log(frank);
// using a method
frank.calcAge();
// using a getter
console.log(frank.age);
frank.greet();

const walter = new PersonClass("Walter White", 1990);
walter.greet();
console.log(walter);

// * classes allow you to add methods in the following way as well:
// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

// > 1. classes are not hoisted

// > 2. classes are first class citizens (can be passed into functions, and return them from functions)

// > 3. classes are executed in strict mode (even if its not explicitly declared)
