"use strict";

// * 115 - Inheritance Between: Class Functions

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
      this._fullName = name;
    }
  }

  get fullName() {
    return this._fullName;
  }
}

// * Linking prototypes
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    // ? needs to happen first: constructor PersonClass
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // overwriting the parent method
  calcAge() {
    console.log(
      `I'm ${2022 - this.birthYear} years old, but as an student I feel more like ${
        2022 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentClass("Martha Jones", 2001, "FullStack Development");
martha.introduce();
martha.calcAge();
