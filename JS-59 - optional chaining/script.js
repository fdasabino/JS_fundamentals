"use strict";

// * Optional Chaining
const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // * ES6 syntax
  openingHours,

  order: (starterIndex, mainIndex) => {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: ({ starterIndex, mainIndex, time, address }) => {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address}, at ${time}`
    );
  },
  orderPasta: (ing1, ing2, ing3) => {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: (mainIngredient, ...otherIngredient) => {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// * optional chaining checks if a property exists, if it doesn't returns undefined
console.log(restaurant?.openingHours?.mon?.open);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
