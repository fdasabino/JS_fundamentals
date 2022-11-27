"use strict";

// * Functions Returning Functions

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");

greeterHey("Jonas");
greeterHey("Steven");
