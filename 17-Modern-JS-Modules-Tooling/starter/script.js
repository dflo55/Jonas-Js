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
