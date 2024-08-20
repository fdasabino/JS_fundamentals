"use strict";

// * Looping Objects: Object Keys, Values, and Entries

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

// * Property keys (return the key names)
const properties = Object.keys(openingHours);
let openStr = `We are open ${properties.length} days a week: `;
for (const day of properties) {
  openStr += `${day}s `;
}
console.log(openStr);

// * Property values (return values)
const values = Object.values(openingHours);
console.log(values);

// * Property entries (Entire obj)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, value] of entries) {
  console.log(`On ${key} we open at ${value.open} and close at ${value.close}`);
}
