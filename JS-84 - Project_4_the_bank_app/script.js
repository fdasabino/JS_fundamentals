"use strict";

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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// display movements
const displayMovements = (movements) => {
  console.log(movements);
  containerMovements.innerHTML = ""; // manipulating the DOM by overwriting the HTML that exists

  movements.forEach((movement, index) => {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movement}€</div>
  </div>`;
    // attaches element to the DOM  https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// display balances
const calculateAndDisplayBalances = (movements) => {
  const balance = movements.reduce((accumulator, movement) => {
    return accumulator + movement;
  }, 0);

  labelBalance.textContent = `${balance}€`;
};

// display summaries
const calcAndDisplaySummary = (acc) => {
  const incomes = acc.movements
    .filter((movement) => {
      return movement > 0;
    })
    .reduce((accumulator, movement) => {
      return accumulator + movement;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const expenses = acc.movements
    .filter((movement) => {
      return movement < 0;
    })
    .reduce((accumulator, movement) => {
      return accumulator + movement;
    });
  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  const interestRate = acc.movements
    .filter((movement) => {
      return movement > 0;
    })
    .map((deposit) => {
      return (deposit * acc.interestRate) / 100;
    })
    .filter((interest, i, arr) => {
      console.log(arr);
      return interest >= 1;
    })
    .reduce((accumulator, interest) => {
      return accumulator + interest;
    }, 0);

  labelSumInterest.textContent = `${interestRate}€`;
};

// loops through the array and returns the first letter of each array element
const createUserNames = (userAcc) => {
  userAcc.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
    // console.log(acc.username);
  });
};
createUserNames(accounts);

// Event handlers
let currentAccount;

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = "";
    inputLoginPin.value = "";

    // remove cursor focus from input field
    inputLoginPin.blur();

    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calculateAndDisplayBalances(currentAccount.movements);
    // Display summary
    calcAndDisplaySummary(currentAccount);
  }
});
