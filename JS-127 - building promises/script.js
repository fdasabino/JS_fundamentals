"use strict";

// * 127 - building promises

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("lottery draw");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You win π°π°π°");
    } else {
      reject(new Error("You lose πΏπΏπΏ"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisified setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2).then(() => {
  console.log("I waited for 2 seconds");
  return wait(1).then(() => console.log("I waited for 1 second"));
});
