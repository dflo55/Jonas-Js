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

// 280. Review: Writing Clean and Modern Javascript
// READABLE CODE
// Write code so that others can understand it
// Write code so that you can understand it in 1 year
// Avoid too "clever" and overcomplicated solutions
// Use descriptive variable names: what they contain
// use descriptive function names: what they do
// GENERAL
// Use DRY principle(refactor your code)
// Dont pollute global namespace, encapsulate instead
// Dont use var
// Use strong type checks ( === and !==)
// FUNCTIONS
// Generally, functions should only do one thing
// Dont use more than 3 function parameters
// Use default paramenters whenever possible
// Generally, return same data type as received
// Use arrow functions when they make code more readable
// OOP (Object Oriented Programming)
// Use ES6 classes
// Encapsulate data and dont mutate it from outside the class
// implement method chaining
// Do not use arrow functions as methods(in regular objects)
// AVOID NESTED  CODE
// Use early return (guard clauses)
// use ternary(conditional) or logical operators of if
// use multiple if instead of if/else-if
// Avoid for loops/ for of loops, use array methods instead (map, filter, reduce)
// Avoid callback based asynchronous APIs
// ASYNCHRONOUS CODE
// Consume promises with async/await for best readability
// Whenever possible, run promises in parallel (Promise.all)
// Handle erros and promise rejections

// 281. Lets Fix Some Bad Code: Part 1
// Check clean.js for this lesson

// 282. Declaritive and Functional JavaScript Principles
// There are 2 fundamentally different ways of writing code (paradigms)
// -----Imperative Code-----
// -Programmer explains "HOW to do things"
// -We explain the computer every single step it has to follow to achieve a result
// const arr = [2,4,6,8];
// const doubled = [];
// for (let i=0; i < arr.length; i++)
// doubled[i] = arr[i] * 2;
// -----Declarative Code-----
// -Programmer tells "WHAT to do"
// -We simply describe the way the computer should achieve the result
// -The HOW (step by step instructions) get abstracted away
// const arr = [2, 4, 6, 8];
// const doubled = arr.map(n => n * 2);
// -Sub paradigm of Declaritive Code is Functional Programming
// -----Function Programming-----
// -Declarative programming paradigm
// -Based on the idea of writing software by combining many pure functions,
// avoiding side effects, and mutating data
// -declarative code/ functional programming is more modern now
// -Side Effect: Modification(mutation) of any data outside of the function
// (mutating external variables, logging to console, writing to DOM, etc.)
// -Pure Function: Function without side effects. Does not depend on external
// variables. Given the same inputs, always returns the same outputs
// -Functional programming is about avoiding mutating data
// -Immutability: State(data) is never modified! Instead, state is copied
// and the copy is mutated and returned
// -----Functional Programming Techniques-----
// -Try to avoid data mutations
// -Use built-in methods that dont produce side effects
// -Do data transformations with methods such as .map(), .filter(), and .reduce()
// -try to avoid side effects in functions: this of course is not always possible
// -----Declarative Syntax-----
// -Use array and object destructuring
// -Use the spread operator(...)
// -Use the ternary(conditional) operator
// -Use template literals

// 283. Let's Fix Some Bad Code: Part 2
// located in clean.js
