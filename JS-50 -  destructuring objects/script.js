"use strict";

// *  Destructuring objects
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
};

// * order obj parameter
restaurant.orderDelivery({
  time: "22.30",
  address: "Via del Sole 21",
  mainIndex: 2,
  starterIndex: 2,
});

// * normal destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// * destructuring and give new variable names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// * destructuring and give new variable names and default values as fallback
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log("Menu: ", menu, "Starters: ", starters);

// * mutating variables in a object
let a = 111;
let b = 222;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// * destructuring nested obj
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
