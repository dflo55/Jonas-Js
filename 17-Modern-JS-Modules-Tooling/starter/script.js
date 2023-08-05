// Importing module
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
