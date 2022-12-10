"use strict";

// * JS-104 - Selecting, Creating, and Deleting Elements

// * Selecting elements
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

// * Creating and inserting elements
const messageContainer = document.createElement("div");
messageContainer.classList.add("cookie-message");
messageContainer.innerHTML =
  'We use cookies for improved user experience and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.insertAdjacentElement("afterend", messageContainer);

// * delete elements from the DOM
const buttonCookie = document.querySelector(".btn--close-cookie");
buttonCookie.addEventListener("click", () => {
  messageContainer.remove();
});

// * Old way
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

///////////////////////////////////////
// * DOM Traversing
// const h1 = document.querySelector('h1');

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);

// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';

// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// * sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", (e) => {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// * Dom Events

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("Html parsed", e);
// });

// * window event

// window.addEventListener("load", (e) => {
//   console.log("Page fully loaded", e);
// });

//! display a message to the user warning about leaving the page

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });
