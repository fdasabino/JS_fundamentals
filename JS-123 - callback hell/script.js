"use strict";

// * Callback Hell (Pyramid of Doom) When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.

function getUser(id, callback) {
  // Simulate an API call
  setTimeout(() => {
    const user = { id, name: "John Doe" };
    callback(user);
  }, 1000);
}

function getOrders(user, callback) {
  // Simulate an API call
  setTimeout(() => {
    const orders = [{ id: 1, userId: user.id, product: "Laptop" }];
    callback(orders);
  }, 1000);
}

function processOrders(orders, callback) {
  // Simulate order processing
  setTimeout(() => {
    const processed = orders.map((order) => ({ ...order, status: "processed" }));
    callback(processed);
  }, 1000);
}

function sendEmail(orders, callback) {
  // Simulate email sending
  setTimeout(() => {
    const confirmation = { success: true, orders };
    callback(confirmation);
  }, 1000);
}

// ! Callback Hell (Pyramid of Doom) 😩

getUser(userId, (user) => {
  getOrders(user, (orders) => {
    processOrders(orders, (processed) => {
      sendEmail(processed, (confirmation) => {
        console.log("Order Processed:", confirmation);
      });
    });
  });
});
