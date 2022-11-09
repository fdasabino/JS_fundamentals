// * if/else statements => control structure

const age = 15;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age;

if (isOldEnough) {
  console.log(`You are ${age} so you can take yopur drivng license 🚗`);
} else {
  console.log(`You are not old enough 👶, wait another ${yearsLeft} years.`);
}
