"use strict";

// * Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'maker' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h

// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed; //km/h
};

const bmw = new Car("bmw", 120);
console.log(bmw);

const mercedes = new Car("mercedes", 95);
console.log(mercedes);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.maker} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.maker} is going at ${this.speed}km/h`);
};

// ? for every call the method accelerate increases the speed of the car.
// ? for every call the method brake decreases the speed of the car.

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
