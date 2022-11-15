"use strict";

// *  The Spread Operator (...)

// ? Works on iterables: arrays, strings, maps, sets. Not Objects

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
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// * building a new array joining an old one and add to it
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// * copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// * join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// * string
const str = "Frank";
const letters = [...str, " ", "S."];
console.log(letters);

// * arguments of a function in a obj
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

// * Objects ES18
const newRestaurant = {
  ...restaurant,
  founder: "Giuseppe Marianno",
  foundedIn: 1988,
};
console.log(newRestaurant);

// * Copying obj

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "La vecchia taverna";
console.log(restaurantCopy);
