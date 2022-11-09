// * const, let, var
// ? Always try and use const, in some special cases use the let keyword.

const birthYear = 1990;
console.log("birthYear:", birthYear);

const birthday = "april 25th";
console.log(birthday);

let age = 30;
console.log("Happy birthday: ", age);
age = 31;
console.log("Happy birthday: ", age);
age = 32;
console.log("Happy birthday: ", age);
age = 33;
console.log("Happy birthday: ", age);

// ! Should be avoided but its good to know for legacy reasons
var job = "programmer";
console.log(job);

job = "bartender";
console.log(job);
