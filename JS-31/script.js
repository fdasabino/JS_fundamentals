"use strict";

// * Object Methods

const franksObject = {
  firstName: "Frank",
  lastName: "Sabino",
  birthYear: 1990,
  hasDriverLicense: true,
  job: "Student",
  friends: ["Kev", "Ester", "Morgan"],

  // ? function expression with the THIS keyword that points to the object where it its function is invoked.

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // ! Part of challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(1990)} old ${this.job}, and he ${
      this.hasDriverLicense ? "has a drive's license" : "hasn't got a drive's license"
    }`;
  },
};

// ? invoke the function
franksObject.calcAge();

// ? the age key has now been created and can be used through out the code
console.log(franksObject.age);

// ! Challenge
// * Frank is a 32 years old student, and he has a driver's license
console.log(franksObject.getSummary());
