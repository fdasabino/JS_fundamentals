"use strict";

// *  Rest Pattern and Parameters
// ? Rest Patterns looks like spread operators, but to pack elements inside an array
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // * destructuring arguments in a function and assigning a variable name directly. No order required
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// * 1 - destructuring

// * SPREAD because is on the right side of the =
const arr = [1, 2, ...[3, 4]];

// * REST because is on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// * Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.table(sat);
console.table(weekDays);

// * 2 - functions - Rest syntax takes all arguments passed into a function a packs them to an array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 6);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza("mushrooms", "onions", "olives", "chicken");
