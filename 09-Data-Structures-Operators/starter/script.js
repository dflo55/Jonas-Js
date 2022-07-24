"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
};

// restaurant.orderDelivery({
//   time: `23:30`,
//   address: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `Via del Sole, 21`,
//   starterIndex: 2,
// });

// Spread Operator  ...
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu); // adds Gnocci to the restaurants main menu

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

// Iterables: arrays, strings, maps, sets, NOT OBJECTS
const str = `David`;
const letters = [...str, ` `, `s`];
console.log(letters);
console.log(...str); // (D a v i d)

// Real World Example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurantCopy);

/// Object Destructuring \\\
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const { name: restaurantName, openHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, openingHours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);

/*//// Destructuing Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1
*/
