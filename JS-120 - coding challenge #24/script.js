"use strict";

// * Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class

// 2. Make the 'charge' property private

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!

// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀

class CarClass {
  constructor(car, speedKm) {
    this.speedKm = speedKm;
    this.car = car;
  }

  accelerate() {
    this.speedKm += 10;
    console.log(`${this.car} is going at ${this.speedKm}km/h`);
    return this;
  }

  brake() {
    this.speedKm -= 5;
    console.log(`${this.car} is going at ${this.speedKm}km/h`);
    return this;
  }

  get speedUS() {
    return this.speedKm / 1.6;
  }

  set speedUS(speed) {
    this.speedKm = speed * 1.6;
  }
}

class ElectricCarClass extends CarClass {
  #charge;
  constructor(car, speedKm, charge) {
    super(car, speedKm);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speedKm += 20;
    this.#charge--;
    console.log(`${this.car} is going at ${this.speedKm}km/h with a charge of ${this.#charge}%`);
    return this;
  }

  brake() {
    this.speedKm -= 5;
    console.log(`${this.car} is going at ${this.speedKm}km/h with a charge of ${this.#charge}%`);
    return this;
  }
}

// * method chaining

// * combustion car
const audi = new CarClass("Audi RS7", 150);
audi.brake().accelerate().brake().brake().brake().brake();

console.log(audi.speedUS);
console.log(audi.speedKm);

// * electric car
const rivian = new ElectricCarClass("Rivian", 120, 23);
rivian.brake().brake().brake().chargeBattery(100).accelerate();

console.log(rivian.speedUS);
console.log(rivian.speedKm);
