"use strict";

// ! Project 2 - Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");

const openModalOnClick = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalOnClick = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener("click", openModalOnClick);
}

closeModalBtn.addEventListener("click", closeModalOnClick);
overlay.addEventListener("click", closeModalOnClick);
