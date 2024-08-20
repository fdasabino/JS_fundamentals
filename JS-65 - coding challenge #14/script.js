"use strict";

// ! Coding challenge #14

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
console.log(gameEvents);

// * 1.
const events = [...new Set(gameEvents.values())];
console.log("(1) Removed duplicates and coverted to an array: ", events);

// * 2.
gameEvents.delete(64);
console.log("(2) Removed yellow card at 64: ", gameEvents);

// * 3.
const avg = Math.trunc(90 / gameEvents.size);
console.log("(3) Calculate avg events: ", `An event happened, on average, every ${avg} minutes`);

// * 4.
console.log("(4) Loop through events and organise order of events: ");
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF]: ${key} => ${value}`);
}

// ? Let's continue with our football betting app! This time, we have a map called
// ? 'gameEvents' (see below) with a log of the events that happened during the
// ? game. The values are the events themselves, and the keys are the minutes in which
// ? each event happened (a football game has 90 minutes plus some extra time).
// ? Your tasks:
// ? 1. Create an array 'events' of the different game events that happened (no
// ? duplicates)
// ? 2. After the game has finished, is was found that the yellow card from minute 64
// ? was unfair. So remove this event from the game events log.
// ? 3. Compute and log the following string to the console: "An event happened, on
// ? average, every 9 minutes" (keep in mind that a game has 90 minutes)
// ? 4. Loop over 'gameEvents' and log each element to the console, marking
// ? whether it's in the first half or second half (after 45 min) of the game, like this:
// ? [FIRST HALF] 17:
// ? ⚽
// ? GOAL
// ? GOOD LUCK 😀
