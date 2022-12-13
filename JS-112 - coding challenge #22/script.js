"use strict";

// * Your tasks:

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)

// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

class CarClass {
  constructor(car, speedKm) {
    this.speedKm = speedKm;
    this.car = car;
  }

  accelerate = function () {
    this.speedKm += 10;
    console.log(
      `${ford.car} is going at ${this.speedKm}km/h which is ${this.speedUS} in miles per hour`
    );
  };

  brake = function () {
    this.speedKm -= 5;
    console.log(
      `${ford.car} is going at ${this.speedKm}km/h which is ${this.speedUS} in miles per hour`
    );
  };

  get speedUS() {
    return this.speedKm / 1.6;
  }

  set speedUS(speed) {
    this.speedKm = speed * 1.6;
  }
}

const ford = new CarClass("Ford", 120);
ford.speedUS = 50;
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
