console.log("Exporting module");

// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity}, ${product} added to cart`);
// };

// const totalPrice = 10;
// const totalQuantity = 25;
// export { totalPrice, totalQuantity };

const cart = [];

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity}, ${product} added to cart`);
}
