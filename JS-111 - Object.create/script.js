"use strict";

// * 111 - Object.create

// ? The Object.create() method creates a new object,
// ? using an existing object as the prototype of the newly created object.

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// * steven will inherit the properties of PersonProto
const steven = Object.create(PersonProto);
console.log(steven.__proto__ === PersonProto);

// ? in this stage it returns an empty object
console.log(steven);

// ? here we add the properties to steve manually (goes against the principals)
steven.name = "Steven";
steven.birthYear = 2000;

// ? and automatically calculate steven's age
steven.calcAge();

// ? here we add the properties to steve programmatically (the way you should do)
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1990);
console.log(sarah);
sarah.calcAge();
