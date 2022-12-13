"use strict";

// * 116 - Inheritance Between "Classes": Object.create (preferred way)

// * Parent Prototype
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// ? due to prototype chain:

// * steven will inherit the properties of PersonProto
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// * jay inherits the properties of StudentProto and PersonProto
const jay = Object.create(StudentProto);
jay.init("Jay", 1995, "Web Design");
console.log(jay);
jay.introduce();
jay.calcAge();
