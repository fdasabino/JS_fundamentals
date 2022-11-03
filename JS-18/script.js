// ! Coding challenge #4

const bill = Number(prompt("Enter a bill amount: "));
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}$ the tip ${tip}$ making the total bill ${bill + tip}$`);
