const now = 2022;

const franksAge = now - 1990;
console.log(franksAge);

const kevsAge = now - 1985;
console.log(kevsAge);

console.log(now - franksAge < now - kevsAge);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10 10

//calculating average age
const averageAge = (franksAge + kevsAge) / 2;
console.log(averageAge);
