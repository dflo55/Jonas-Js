// 272. Exporting and Importing in ES6 Modules
// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart(`bread`, 10);

console.log(`Importing module`);
// console.log(price, tq);

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart(`bread`, 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add(`pizza`, 2);
add(`apples`, 5);
add(`bread`, 2);
console.log(cart);

// 273. Top-Level await(ES2022)
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// 274. The Module Pattern
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);

    return {
      addToCart,
      cart,
      totalPrice,
      totalQuantity,
    };
  };
})();

shoppingCart2.addToCart(`apple`, 4);
shoppingCart2.addToCart(`pizza`, 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);

// 275. CommonJS Modules

// 276. A Brief Introduction to the Command Line
// cd = change directory
// rm = remove a file
// rmdir = remove a folder (must be empty)
// mkdir = to create a new folder
// touch = to create a file (touch index.html)
// cd .. = goes back a directory
// cd ../.. = goes back twice in directories
//

// 277. Introduction to NPM

import cloneMap from "./node_modules/lodash-es/_cloneMap.js";

// 278. Bundling with Parcel and NPM Scripts
import cloneMap from "lodash-es";

// 279. Configuring Babel and Polyfilling
