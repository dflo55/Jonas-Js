"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `You are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // creating NEW variable with same name as outer scope's variable
      const firstName = `Steven`;

      // Reassigning outer scope's variable
      output = `NEW OUTPUT!`;

      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = `David`;
calcAge(1995);

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = `David`;
// let job = `Security Officer`;
// const year = 1995;

// Hoisting functions
// console.log(addDeclaration(2, 3)); // works
// console.log(addExpression(2, 3)); // does not work
// console.log(addArrow(2, 3)); // does not work

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

// Example

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

console.log(this);
