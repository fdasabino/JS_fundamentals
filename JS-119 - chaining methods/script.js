"use strict";

// * 119 - Chaining Methods

class Account {
  //  * Public fields (instances)
  locale = navigator.language;

  //  * Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    console.log(this.#movements);
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved ${val}`);
      return this;
    }
  }
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Francisco Sabino", "EUR", 1111);
console.log(acc1);

acc1.requestLoan(1000);
acc1.deposit(350);
acc1.withdraw(150);

// * methods have to be returned (IMPORTANT) to be able to be chained
acc1
  .deposit(600)
  .deposit(5000)
  .withdraw(200)
  .withdraw(300)
  .requestLoan(5000)
  .getMovements();
