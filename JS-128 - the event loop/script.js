"use strict";

// * 128 - The event loop in practice

//  JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
//  collecting and processing events, and executing queued sub-tasks.

// executes first
console.log("test start");

// executes last
setTimeout(() => console.log("0 sec timer"), 0);

// executes third
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// executes fourth
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000; i++) {}
  console.log(res);
});

// executes second
console.log("Test end");
