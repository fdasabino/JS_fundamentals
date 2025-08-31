// * type conversion and coercion

// ? conversion => manually converting a type
const inputYear = prompt("Enter your age: ");
console.log(Number(inputYear) + 18);

// ? coercion js automatically converts a type
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); //coerces to a number
console.log("23" + "10" + 3); //coerces to a string
console.log("23" * "10" + 3); //coerces to a number
console.log("23" / "10" + 3); //coerces to a number
