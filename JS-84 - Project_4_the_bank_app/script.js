"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

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
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = ""; // manipulating the DOM by overwriting the HTML that exists

  // sorting the movements by ascending or descending
  const sortedMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  sortedMovements.forEach((movement, index) => {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${movement.toFixed(2)}€</div>
  </div>`;
    // attaches element to the DOM  https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// display balances
const calculateAndDisplayBalances = (acc) => {
  acc.balance = acc.movements.reduce((accumulator, movement) => {
    return accumulator + movement;
  }, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
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
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const expenses = acc.movements
    .filter((movement) => {
      return movement < 0;
    })
    .reduce((accumulator, movement) => {
      return accumulator + movement;
    });
  labelSumOut.textContent = `${Math.abs(expenses.toFixed(2))}€`;

  const interestRate = acc.movements
    .filter((movement) => {
      return movement > 0;
    })
    .map((deposit) => {
      return (deposit * acc.interestRate) / 100;
    })
    .filter((interest, _, arr) => {
      console.log(arr);
      return interest >= 1;
    })
    .reduce((accumulator, interest) => {
      return accumulator + interest;
    }, 0);

  labelSumInterest.textContent = `${interestRate.toFixed(2)}€`;
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

const updateUI = (currentAccount) => {
  // Display movements
  displayMovements(currentAccount.movements);
  // Display balance
  calculateAndDisplayBalances(currentAccount);
  // Display summary
  calcAndDisplaySummary(currentAccount);
};

// Event handlers
let currentAccount;

// handle login
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

    // update UI
    updateUI(currentAccount);
  }
});

// handle loan request
btnLoan.addEventListener("click", (event) => {
  event.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some((mov) => mov >= loanAmount * 0.1)
  ) {
    console.log("Loan granted");

    // add movement
    currentAccount.movements.push(loanAmount);

    // update UI
    updateUI(currentAccount);
  }

  // clear input fields
  inputLoanAmount.value = "";
});

// handle transfer funds
btnTransfer.addEventListener("click", (event) => {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = "";
  inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Transfer funds
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  } else {
    throw new Error("Something went wrong");
  }
});

// handle delete account
btnClose.addEventListener("click", (event) => {
  event.preventDefault();

  // check if account exists and find it's index number
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex((acc) => {
      return acc.username === currentAccount.username;
    });

    // empty input fields
    inputCloseUsername.value = "";
    inputClosePin.value = "";

    // delete found account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;

    // welcome message update
    labelWelcome.textContent = "Log in to get started";
  }
});

// sort transactions
let sorted = false;
btnSort.addEventListener("click", (event) => {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
