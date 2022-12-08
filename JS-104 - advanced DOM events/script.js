"use strict";

// * JS-104 - Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll(".section");
console.log(allSections);

const header = document.querySelector(".header");
console.log(header);

console.log(document.getElementById("footer"));
console.log(document.getElementsByClassName("section"));
console.log(document.getElementsByTagName("section"));

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
