"use strict";

// * Arrays Methods practice

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
console.log(accounts);

// 1. flatMap method combines map and flat in the same method, uses a callback fn
const bankDepositSum = accounts
  .flatMap((account) => account.movements)
  .filter((movements) => movements > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

// 2. using reduce method to perform a count just/ filter is the easier method here
const numDeposits1000Euro = accounts
  .flatMap((deposit) => deposit.movements)
  .reduce((count, current) => (current >= 1000 ? ++count : count), 0); // prefixed ++ operator = "count + 1"

console.log(numDeposits1000Euro);

// 3. advanced use of reduce
const { deposits, withdrawals } = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits);
console.log(withdrawals);

// 4. convert some element to Capitalized: this is a nice title => => This Is a Nice Title
const convertTitleCase = (title) => {
  const exceptions = ["a", "an", "the", "such"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join(" ");
  return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this not such a LONG title"));
console.log(convertTitleCase("this another EXAMPLE"));
