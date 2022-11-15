"use strict";

// *  Destructuring Arrays

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// * read the values from an array using bracket notation
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

// ? or array destructuring

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// * reordering the array values
[main, secondary] = [secondary, main];
console.log(main, secondary);

// * destructuring the array values using a function method
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// * destructuring a nested array
const nested = [2, 4, [5, 6]];
const [i, h, [j, k]] = nested;
console.log(i, h, j, k);

// * default values array
const [p = 1, q = 1, r = 1] = [50, 10];
console.log(p, q, r);
