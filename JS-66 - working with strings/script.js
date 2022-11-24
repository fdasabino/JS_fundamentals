"use strict";

// * Working with strings

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4)); // starts extract from the 4th character onwards
console.log(airline.slice(4, 7)); // starts extract from the 4th character and stops at the 7th

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2)); // weird
console.log(airline.slice(1, -1)); // weird

const checkMiddleSeat = (seat) => {
  // B and E are middle seat
  const assignedSeat = seat.slice(-1);

  if (assignedSeat === "B" || assignedSeat === "E") {
    console.log("You have a middle seat", assignedSeat);
  } else {
    console.log("You got Lucky!!!");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passeger = "fRank";
const passegerLower = passeger.toLowerCase();
const passegerCorrect = passegerLower[0].toUpperCase() + passegerLower.slice(1);

console.log(passegerCorrect);

// Comparing emails
const email = "franksabino@me.com";
const loginEmail = "   FrankSabino@me.Com \n";

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing parts of a string
const priceGB = "288,79£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const annoucement = "All passenger come to boarding door 23. Boarding door 23!";

console.log(annoucement.replace("door", "gate"));
console.log(annoucement.replaceAll("door", "gate"));

// Booleans
const newPlane = "Airbus A320neo";
console.log(newPlane.includes("A320"));
console.log(newPlane.includes("Boeing"));
console.log(newPlane.startsWith("Air"));

if (newPlane.startsWith("Airbus") && newPlane.endsWith("neo")) {
  console.log("Part of the new airbus family");
} else {
  console.log("Not a part of the new airbus family");
}

// practice exercise
const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("Not allowed to board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and pocket knife");
checkBaggage("I have some socks and camera");
checkBaggage("I have some snacks and a gun for protection");

// split
console.log("a+very+nice+string".split("+"));
console.log("Francisco Sabino".split(" "));

const [firstName, lastName] = "Frank Sabino".split(" ");

console.log(firstName);
console.log(lastName);

const greeting = ["Hello Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(greeting);

// capitalization of a name
const capitalizeName = (name) => {
  const names = name.split(" ");
  const namesUppercase = [];
  for (const word of names) {
    // namesUppercase.push(word[0].toUpperCase() + word.slice(1));
    namesUppercase.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUppercase.join(" "));
};

capitalizeName("francisco de angeli sabino");

// padding a string
const message = "Go to gate 23";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));

// masking a credit card number
const maskingCreditCard = (number) => {
  const string = String(number);
  const lastFourDigits = string.slice(-4);
  return lastFourDigits.padStart(string.length, "*");
};

console.log(maskingCreditCard(4242424242424242));

// repeat method
const badWeatherMessage = "Bad weather... all departures delayed";
console.log(badWeatherMessage.repeat(5));

const planesInline = (n) => {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInline(10);
planesInline(5);
planesInline(3);
