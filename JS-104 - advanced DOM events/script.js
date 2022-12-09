"use strict";

// * JS-104 - Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll(".section");
console.log(allSections);

console.log(document.getElementById("footer"));
console.log(document.getElementsByClassName("section"));
console.log(document.getElementsByTagName("section"));

const header = document.querySelector(".header");
console.log(header);

// Creating and inserting elements
const messageContainer = document.createElement("div");
messageContainer.classList.add("cookie-message");
messageContainer.innerHTML =
  'We use cookies for improved user experience and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.insertAdjacentElement("afterend", messageContainer);

// delete elements from the DOM
const buttonCookie = document.querySelector(".btn--close-cookie");
buttonCookie.addEventListener("click", () => {
  messageContainer.remove();
});

// Old way
// scrolling
// window.scrollTo(
//   section1Coords.left + window.pageXOffset,
//   section1Coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: section1Coords.left + window.pageXOffset,
//   top: section1Coords.top + window.pageYOffset,
//   behavior: "smooth",
// });

// creating a random color in rgb
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
//     0,
//     255
//   )})`;
// };

// const link = document
//   .querySelector(".nav__link")
//   .addEventListener("click", (e) => {
//     console.log("Link =>", e.currentTarget);
//     stop propagation
//     e.stopPropagation();
//   });

// document.querySelector(".nav__links").addEventListener("click", (e) => {
//   console.log("Links Cont =>", e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", (e) => {
//   console.log("nav =>", e.currentTarget);
// });
