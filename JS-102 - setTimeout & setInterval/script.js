"use strict";

// * JS-102 - Timers: setTimeout and setInterval

// setTimeout
const ingredients = ["onions", "tuna"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log("here is your pizza with🍕", ing1, ing2),
  3000,
  ...ingredients
);

console.log("Waiting");

if (ingredients.includes("olives")) {
  clearTimeout(pizzaTimer);
  console.log("Cleared");
}

// setInterval
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 5000);

// Timer
const timer = function () {
  // Set time to 2 minutes
  let time = 120;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    console.log(`${min}:${sec}`);

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
    }

    // Decrease 1s
    time--;
  };

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

timer();
