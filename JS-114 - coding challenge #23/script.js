"use strict";

// * Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definition of polymorphism 😉

// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀

const CarClass = function (car, speedKm) {
  this.speedKm = speedKm;
  this.car = car;
};

CarClass.prototype.accelerate = function () {
  this.speedKm += 10;
  console.log(`${this.car} is going at ${this.speedKm}km/h`);
};

CarClass.prototype.brake = function () {
  this.speedKm -= 5;
  console.log(`${this.car} is going at ${this.speedKm}km/h`);
};

const ElectricCar = function (car, speedKm, charge) {
  CarClass.call(this, car, speedKm);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(CarClass.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speedKm += 20;
  this.charge--;
  console.log(
    `${this.car} is going at ${this.speedKm}km/h with a charge of ${this.charge}%`
  );
};

const tesla = new ElectricCar("Tesla", 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
