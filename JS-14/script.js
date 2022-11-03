// ! Coding challenge #3

const averageDolphins = (96 + 90 + 115) / 3;
console.log("Dolphins", averageDolphins);

const averageKoalas = (96 + 80 + 9) / 3;
console.log("Koalas", averageKoalas);

const minScore = 100;

if (averageDolphins >= minScore && averageDolphins > averageKoalas) {
  console.log("Dolphins Win 🐬");
} else if (averageKoalas >= minScore && averageKoalas > averageDolphins) {
  console.log("Koalas Win 🐨");
} else if (averageDolphins === averageKoalas && minScore) {
  console.log("Draw 🚫");
} else {
  console.log("No winner declared, Extra time ⌚");
}
