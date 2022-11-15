"use strict";

// *  Scoping in practice

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const outPut = `Hello ${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = "Frank"; // ? Global scope
calcAge(1990);
// const firstName = "Frank"; // ! Reference error
