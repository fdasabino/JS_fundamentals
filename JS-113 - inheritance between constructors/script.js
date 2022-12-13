"use strict";

// * 112 - Inheritance Between: Constructor Functions

const Person = function (firstName, birthYear) {
  // * instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// * Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 1998, "Front-End-Development");
console.log(mike);
mike.introduce();
mike.calcAge();
