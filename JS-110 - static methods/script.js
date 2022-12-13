"use strict";

// * 110 - Static methods

// ? The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// ? Array constructor method
const arr = Array.from(document.querySelectorAll("h1"));
console.log(arr);

// ! [1,2,3,4].from() does not work (not valid for its prototype [])

// ? parse float is another example of a constructor method (Number constructor)
Number.parseFloat(12);

// ! 12.parseFloat() does not work (not valid for its prototype 12)

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // ? methods will be added to .prototype property (all instances have access to)
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }
  // ? static method
  static hey = function () {
    console.log("Hey there");
  };
}

// ? adding a static method to a constructor
// PersonClass.hey = function () {
//   console.log("Hey there");
//   console.log(this);
// };
PersonClass.hey();

// ? hey() is not inherited so it will not work on:
// const frank = new PersonClass("Frank", 1990);
// frank.hey();
