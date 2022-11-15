"use strict";

// *  Regular functions VS arrow functions

// var firstName = "Matilda"; // global lexical scope

const person = {
  firstName: "Frank",
  year: 1990,
  calcAge: function () {
    console.log(this); // returns the object person
    console.log(2022 - this.year);
    console.log(this.firstName);
  },

  greet: () => {
    console.log(this); // returns window object
    console.log(`Hey ${this.firstName}`); // retunrs 'Hey undefined...' unless firstName is defined on the Global scope
  },
};
person.calcAge();
person.greet();
