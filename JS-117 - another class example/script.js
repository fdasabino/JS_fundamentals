"use strict";

// * 117 - Another class example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // * public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved ${val}`);
    }
  }
}

const acc1 = new Account("Francisco Sabino", "EUR", 1111);
console.log(acc1);

acc1.requestLoan(1000);
acc1.deposit(350);
acc1.withdraw(150);
