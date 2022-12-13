"use strict";

// * 118 - Encapsulation: Protected Properties and Methods (data privacy)
// ? Encapsulation keeps some methods private a convention so other developers know they're private

// ? Class fields: new proposal to the javaScript community:
//  * Public fields
//  * Private fields #
//  * Public methods
//  * Private methods #

class Account {
  //  * Public fields (instances)
  locale = navigator.language;

  //  * Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // protected property
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //  * Public methods (public interface)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved ${val}`);
    }
  }
  //  * Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Francisco Sabino", "EUR", 1111);
console.log(acc1);

//  * Public methods (public interface)
acc1.requestLoan(1000);
acc1.deposit(350);
acc1.withdraw(150);
console.log(acc1.getMovements());

// ! acc1.#approveLoan(100) Property '#approveLoan' is not accessible outside class 'Account' because it has a private identifier
// ! console.log(acc.#movements) Private identifiers are not allowed outside class bodies
