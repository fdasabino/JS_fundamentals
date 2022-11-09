"use strict";

// * Dot vs Bracket notation

const franksObject = {
  firstName: "Frank",
  lastName: "Sabino",
  age: 2022 - 1990,
  job: "Student",
  friends: ["Kev", "Ester", "Morgan"],
};

// console.log(franksObject);
// console.log(franksObject.firstName);
// console.log(franksObject.lastName);
// console.log(franksObject.age);
// console.log(franksObject["job"]);
// console.log(franksObject["friends"]);

// ? prompt example
// const interest = prompt(
//   "What do you want to know? Choose between firstName, lastName, age, job and friends"
// )
//   .toLowerCase()
//   .trim();

// if (franksObject[interest]) {
//   console.log(franksObject[interest]);
// } else {
//   console.log("It doesn't exist");
// }

// ? gets whatever keys have in common, in this case "Name"
const nameKey = "Name";
console.log(franksObject["first" + nameKey]);
console.log(franksObject["last" + nameKey]);

// ? adds to the object
franksObject.location = "Sweden";
franksObject["instagram"] = "mrfranksabino";
console.log(franksObject);

// ! Challenge
// Frank has 3 friends and his best friend is called kev
console.log(
  `${franksObject.firstName} has ${franksObject.friends.length} friends, and his best friend is called ${franksObject.friends[0]}`
);
