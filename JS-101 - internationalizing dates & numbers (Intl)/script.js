"use strict";

// * JS-101 - Internationalizing Dates & Numbers (Intl)
const locale = navigator.language;

// dates
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

console.log(new Intl.DateTimeFormat(locale, options).format(now));

// numbers
const num = 3825475.23;

const options2 = {
  style: "currency",
  currency: "EUR",
  useGrouping: true,
};

console.log(new Intl.NumberFormat(locale, options2).format(num));
