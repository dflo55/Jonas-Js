"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `*` : ``}${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(43);
  console.log(output);
}
const weekdays = [
  `monday`,
  `tuesday`,
  `wednesday`,
  `thursday`,
  `friday`,
  `saturday`,
  `sunday`,
];
const [monday, tuesday, wednesday, thursday, friday, saturday, sunday] =
  weekdays;

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [saturday]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES3 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Looping Objects: Object Keys, Values, and Entries
// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entries object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
// if (restaurant.openingHours.monday) {
//   console.log(restaurant.openingHours.monday.open);
// }

// WITH optional chaining   ?.
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example optional chaining
// const days = [
//   `monday`,
//   `tuesday`,
//   `wednesday`,
//   `thursday`,
//   `friday`,
//   `saturday`,
//   `sunday`,
// ];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods Optional Chaining
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Arrays Optional Chaining
// const users = [{ name: `David`, email: `dflores2013@yahoo.com` }];

// console.log(users[0]?.name ?? `User array empty.`);

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${item[i] + 1}: ${item[el]}`);
// }

// const rest1 = {
//   name: `Capri`,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// OR assignment operator ||
// rest2.numGuests = rest1.numGuests || 10;
// rest1.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator ??
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//  && assignment operator
// rest1.owner = rest1.owner && `<ANONYMOUS>`;
// rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;
// Even though there is 0 guests, restaurant.numGuests will
// register as 10 because 0 is a falsy value. We fix it with
// nullish down below.
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or ` `)
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// console.log(`----OR----`);
// // The OR  || operator will return the first truthy value
// // Use ANY data type, return ANY data type,
// // short-circuiting
// console.log(3 || `David`); // 3
// console.log(`` || `David`); // David
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`----AND----`);
// // The AND && operator will return the first falsy value (0, ``, undefined, null)
// console.log(0 && `David`); // 0
// console.log(7 && `David`); // David

// console.log(`Hello` && 23 && null && `David`); // null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

//  Rest Patterns and Parameters
//  1) Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]]; // [1,2,3,4]

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]; // [1,2,[3,4,5]]
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const z = [23, 5, 7];
// add(...z);

// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza(`mushrooms`);

//  Calling orderDelivery function but filling in argument with an object
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
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr); // 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu); // adds Gnocci to the restaurants main menu

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays
// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu2);

// Iterables: arrays, strings, maps, sets, NOT OBJECTS
// const str = `David`;
// const letters = [...str, ` `, `s`];
// console.log(letters);
// console.log(...str); // (D a v i d)

// Real World Example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy);

/// Object Destructuring \\\
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, openingHours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//// Destructuing Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from function
// const [starter, mainCourse] = restaurant.order(2, 1);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8, 9, 1
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Data Structures, Modern Operators and Strings
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// // operator.
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1)
// const [players1, players2] = game.players;
// console.log(players1, `1`);
// console.log(players2, `2`);

// // 2)
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk);
// console.log(fieldPlayers);

// // 3)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers, `22`);

// // 4)
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);

// // 5)
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6)
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// // 7)
// team1 < team2 && console.log(`Team 1 is more likely to win`);
/////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1)
// const goalScorers = game.scored.entries();
// for (const [goals, scorers] of goalScorers) {
//   console.log(`Goal ${goals + 1}, ${scorers}`);
// }

// // 2)
// const gameOddsCalc = Object.entries(game.odds);
// const oddCalc = function () {
//   let z = 0;
//   for (const [x, y] of gameOddsCalc) {
//     z += y;

//     console.log(x, y, z);
//   }
// //   return z / 3;
// };
// // console.log(const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }

// average /= odds.length;

// console.log(average);oddCalc());
// 2) other solution
//

// 3) created a variable teamStr to check if x exists
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === `x` ? `draw` : `victory  ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// Sets
// const ordersSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);
// console.log(ordersSet);

// console.log(new Set(`David`)); // d a v i d
// console.log(ordersSet.size); // 3
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet.has(`Bread`));
// ordersSet.add(`Garlic Bread`);
// ordersSet.add(`Garlic Bread`);
// ordersSet.delete(`Risotta`);
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }
// Example
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = [...new Set(staff)]; // turns it into an array
// console.log(staffUnique);
// console.log(
//   new Set([[`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]].size)
// );
// console.log(new Set(`Jonasschmedtmann`).size); // 11

// MAPS Fundamentals
// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// rest.set(2, `Lisbon, Portugal`);
// console.log(rest);

// rest
//   .set(`categories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
//   .set(`Open`, 11)
//   .set(`Close`, 23)
//   .set(true, `We are Open`)
//   .set(false, `We are Closed`);

// console.log(rest.get(`name`));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get(`Open`) && time < rest.get(`Close`)));

// console.log(rest.has(`categories`));
// rest.delete(2); // deletes the key
// const arr = [1, 2];
// rest.set(arr, `Test`);
// rest.set(document.querySelector(`h1`), `Heading`);
// console.log(rest);
// console.log(rest.size); // shows how many keys are in the map
// // rest.clear(); // clears the map

// console.log(rest.get(arr));

// const question = new Map([
//   [`question`, `What is the best programming language in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct!`],
//   [false, `Try again`],
// ]);
// console.log(question);

// // Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// MAPS Iteration
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt(`Your answer`));
// console.log(answer);
// console.log(question.get(question.get(`correct`) === answer));
// console.log(answer === 3 ? question.get(true) : question.get(false));

// Convert MAP to array
// console.log([...question]);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// Which Data Structure to Use ?
// 3 sources of data
// -from the program itself (data written in source code)
// -from the User Interface (data input from user or data written in DOM)
// -from external sources (data fetched for example from web API)
//
// We also have collections of data that we have to store
// We store them in data structures, 4 options to choose
// If it's a simple list - Array or Sets
// If it's key/value pairs - Objects or Maps (keys allow us to describe values
//
// Arrays vs Sets
// Arrays -1) use when you need ordered list of values(might contain duplicates)
// -2) use when you need to manipulate data
// Sets -1) Use when you need to work with unique values
// -2) use when high performance is really important
// -3) use to remove duplicates from arrays
//
// Objects vs Maps
//  Objects -1) More "traditional" key/value store("abused" objects)
// -2) Easier to write and access values with . and []
// -3) Use when you need to include functions(methods)
// -4) Use when working with JSON (can convert to map)
// Maps -1) Better performance
// -2) Keys can have any data type
// -3) easy to iterate
// -4) easy to compute size
// -5) Use when you simply need to map key to values
// -6) Use when you need keys that are not strings

///////////////////////////////////////////////////////////////////
// Coding Challenge #3
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);

// 1)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2)
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// 4)
// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? `FIRST` : `SECOND`;
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }
//
//
// Working with Strings Part 1
// const airLine = `TAP Air Portugal`;
// const plane = `A320`;

// console.log(plane[0]); // A
// console.log(`B737`[0]); // B
// console.log(airLine.length); // 16
// console.log(`B737`.length); // 4

// console.log(airLine.indexOf(`r`)); // 6
// console.log(airLine.lastIndexOf(`r`)); // 10
// console.log(airLine.indexOf(`Portugal`));

// console.log(airLine.slice(4)); // Air Portugal
// console.log(airLine.slice(4, 7)); // Air

// console.log(airLine.slice(0, airLine.indexOf(` `))); // TAP
// console.log(airLine.slice(airLine.lastIndexOf(` `) + 1)); // Portugal

// console.log(airLine.slice(-2)); // al
// console.log(airLine.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) {
//     console.log(`You got the middle seat.`);
//   } else {
//     console.log(`You got lucky`);
//   }
// };
// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

// Working with Strings Part 2
// const airLine = `TAP Air Portugal`;
// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());
// console.log(`david`.toUpperCase());

// // Fix capitalization in name
// const passenger = `dAvID`;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing Emails
// const email = `hello@david.io`;
// const loginEmail = `   Hello@David.Io  `;

// // const lowerEmail = loginEmail.toLowerCase(); // lowers the letters
// // const trimmedEmail = lowerEmail.trim(); // removes empty spaces in string

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// // replacing strings
// const priceGB = `288,97e`;
// const priceUS = priceGB.replace(`e`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announcment = `All passengers come to boarding door 23, Boarding door 23!`;
// console.log(announcment.replace(`door`, `gate`));
// // console.log(announcment.replaceAll(`door`, `gate`));

// console.log(announcment.replace(/door/g, `gate`));

// // Booleans
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`)); // true
// console.log(plane.includes(`Boeing`)); // false
// console.log(plane.startsWith(`Air`)); // false

// if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
//   console.log(`Part of the New Airbus family`);
// } // true

// Practice Excercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are not allowed onboard`);
//   } else {
//     console.log(`Welcome aboard`);
//   }
// };
// checkBaggage(`I have a laptop, some Food, and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

// Working with Strings Part 3
// Split and Join
// console.log(`a+very+nice+string`.split(`+`)); // a, very, nice, string
// console.log(`David Flores`.split(` `));

// const [firstName, lastName] = `David Flores`.split(` `);

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];
//   for (const n of names) {
// namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(` `));
// };

// capitalizeName(`jessica ann smith davis`);
// capitalizeName(`david alejandro flores`);

// // Padding
// const message = `Go to gate 23!`;
// console.log(message.padStart(25, `+`).padEnd(35, `+`));
// console.log(`David`.padStart(25, `+`).padEnd(20, `+`));

// const maskCreditCard = function (number) {
//   const string = number + ``;
//   const last = string.slice(-4);
//   return last.padStart(string.length, `*`);
// };

// console.log(maskCreditCard(6541386655569));
// console.log(maskCreditCard(`269773341089035`));
// console.log(maskCreditCard(4326059638456));

// // Repeat
// const message2 = `Bad weather... All departures delayed... `;
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${`plane`.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

// convert under_score names into camelCase names

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// const conversion = function (names) {
//   const text = document.querySelector(`textarea`);
//   const underscore = names.split(`_`);
//   const camelCase1 = underscore[0];
//   const camelCase2 = underscore[1];
//   const finalWord = camelCase2[0].toUpperCase() + camelCase2.slice(1);

//   console.log(underscore);

//   return camelCase1 + finalWord;
// };
// console.log(conversion(`hello_world`));
// console.log(conversion(`first_name`));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split(`_`);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${`x`.repeat(i + 1)}`);
  }
});
