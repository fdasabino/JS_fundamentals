"use strict";

// ! Coding challenge #7

const markObj = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height).toFixed();
    return this.BMI;
  },
};

const johnObj = {
  fullName: "Jhon Smith",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height).toFixed();
    return this.BMI;
  },
};

// * call the method
markObj.calcBMI();
johnObj.calcBMI();

// * only then you can use it
console.log(
  `${johnObj.fullName}'s BMI is (${johnObj.BMI}) ${
    johnObj.BMI > markObj.BMI ? "higher" : "lower"
  } than ${markObj.fullName}'s (${markObj.BMI})`
);
