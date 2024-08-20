// * Math operators

const now = 2022;

const franksAge = now - 1990;
console.log(franksAge);

const kevinsAge = now - 1985;
console.log(kevinsAge);

console.log(franksAge * 2, kevinsAge / 10, 2 ** 3);
// ? 2 ** 3 means to the power of 3 = 2 * 2 * 2 = 8

const firstName = "Frank";
const lastName = "Sabino";
console.log(firstName + " " + lastName);

// string literal
console.log(
  `Hello my first name is ${firstName} and my last name ${lastName}, nice to meet you!!!`
);

let x = 10 + 5; // 15
console.log(x);

x += 10; // adds to current value in this case 15 + 10
console.log(x);

x *= 10; // multiply to current value in this case 15 + 10 * 10
console.log(x);

x++; // adds one to the current value
console.log(x);

x--; // decreases one from the current value
console.log(x);

// * Comparison operators
// Used to produce boolean values, true or false

//Less than
console.log(franksAge < kevinsAge);
//Greater than
console.log(franksAge > kevinsAge);
//Strict equal
console.log(franksAge === kevinsAge);
//Less than or equal
console.log(franksAge <= kevinsAge);
//Grater than or equal
console.log(franksAge >= kevinsAge);
