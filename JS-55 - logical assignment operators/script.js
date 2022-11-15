"use strict";

// * logical assignment operators ES21

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// ? OR Assignment operator
// ! rest1.numGuests = rest1.numGuests || 10;
// same result just more concisive way
rest1.numGuests ||= 10;
console.log("|| ", { rest1 });

// ! rest2.numGuests = rest2.numGuests || 10;
// same result just more concisive way
rest2.numGuests ||= 10;
console.log("||", { rest2 });

// ?? Nullish Assignment operator (null or undefined)
// same result just more concisive way
rest1.numGuests ??= 10;
console.log("?? ", { rest1 });

// same result just more concisive way
rest2.numGuests ??= 10;

// ? AND Assignment operator
// rest1.owner = rest1.owner && "<ANNONYMOUS/>";
rest1.owner &&= "<ANNONYMOUS/>";
console.log("&& ", { rest1 });

// rest2.owner = rest2.owner && "<ANNONYMOUS/>";
rest2.owner &&= "<ANNONYMOUS/>";
console.log("&& ", { rest2 });
