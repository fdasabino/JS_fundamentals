"use strict";
// ! Project 1 - Guess my number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let lifeSpan = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ Enter a number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 The number is correct";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (lifeSpan > highScore) {
      highScore = lifeSpan;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (lifeSpan > 1) {
      lifeSpan = lifeSpan - 1;
      document.querySelector(".lifeSpan").textContent = lifeSpan;
      document.querySelector(".message").textContent = "😒 Too high...";
    } else {
      document.querySelector(".message").textContent = "😟 You lost!!! ";
      document.querySelector(".lifeSpan").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").textContent = secretNumber;
    }
  } else if (guess < secretNumber) {
    if (lifeSpan > 1) {
      lifeSpan = lifeSpan - 1;
      document.querySelector(".lifeSpan").textContent = lifeSpan;
      document.querySelector(".message").textContent = "😒 Too low...";
    } else {
      document.querySelector(".message").textContent = "😟 You lost ";
      document.querySelector(".lifeSpan").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  lifeSpan = 20;
  document.querySelector(".lifeSpan").textContent = lifeSpan;

  document.querySelector("body").style.backgroundColor = "#222";
});
