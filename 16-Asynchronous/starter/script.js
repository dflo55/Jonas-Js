"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// 248. Our First AJAX Call: XMLHttpRequest

const renderCountry = function (data, className = ``) {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  countriesContainer.style.opacity = 1;
};

// // 250. Welcome to Callback Hell
// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener(`load`, function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get neighbor country
//     const neighbor = data.borders?.[0];
//     console.log(neighbor);
//     if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(`GET`, `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener(`load`, function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, `neighbour`);
//     });
//   });
// };

// getCountryAndNeighbor(`usa`);

// 247. https://restcountries.com/v2/

// 246. Asynchronous JavaScript, AJAx, APIs
// synchronous code - most code is synchronous
// - it is executed line by line
// - each line of code waits for previous line to finish
// - (bad) long running operations block code execution
// asynchronous code - is executed after a task
// that runs in the "background" finishes
// - it is non-blocking meaning main code is not being blocked and
// execution doesnt wait for an asynchronous task to finish its work
// - asynchronous coding is coordination behavior of a program over a period of time
// - Callback functions does not make code asynchronous
// - addEventListener does not make code asynchronous

// AJAX - Asynchronous JavaScript And XML
// - allows us to communicate with remote web servers in an
// asynchronous way.
// - with AJAX calls we can request data from web servers dynamically

// API - Application Programming Interface
// - piece of software that can be used by another piece of software in
// order to allow applications to talk to each other
// - many types of APIs in web developement like DOM API or Geolocation API
// - "Online" API is an application running on a server that receives requests
// for data and sends data back as response
// - we can build our own web APIs(requires back-end development with node.js)
// - APIs for everything like weather data, data about countries, flights data
// currency conversion data, sending emails or sms, using google maps

// We live in a narcicistic age because of the frequent school shootings, consumption of social media(self image), and
// dating - cheating, women

// 251. Promises and the Fetch API
// const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// What is a Promise?
// - An object that is used as a placeholder for the future result of an
// asynchronous operations
// - Or a container for an asynchronously delivered value.
// - Or a container for a future value

// 2 advantages to using Promises
// - No longer need to rely on events and callbacks passed into
// asynchronous functions to handle asynchronous results
// - Instead of nesting callbacks, we can chain promises for a sequence
// of asynchronous operations: escaping callback hell

// The Promise Lifecycle
// - Pending -> before the future value is available
// - Async Task Working -
// - Settled -> Asynchronous task has finished
// - After promise is "settled", there is 2 outcomes of promises:
// Fullfilled or Rejected
// - A fulfilled promise is a promise that has successfully resulted in
// a value(data). Data is available for use
// - A rejected promise means an error occurred

// 252. Consuming Promises
// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// 253. Chaining Promises

// Simpliflied from above
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, `neighbour`));
// };

//   getCountryData(`portugal`);

// 254. Handling Rejected Promises

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, `neighbour`))
//     .catch((err) => {
//       console.error(`${err} $#$%$%$`);
//       renderError(`Something went wrong $%$% ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener(`click`, function () {
//   getCountryData(`portugal`);
// });

// getCountryData(`dsfdsfdsf`);

// 255. Throwing Errors Manually
// const getJSON = function (url, errorMsg = `Something went wrong`) {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];

//       if (!neighbor) throw new Error(`No neighbor found!`);

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbor}`,
//         `Country not found`
//       );
//     })
//     .then((data) => renderCountry(data, `neighbour`))
//     .catch((err) => {
//       console.error(`${err} $#$%$%$`);
//       renderError(`Something went wrong $%$% ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener(`click`, function () {
//   getCountryData(`portugal`);
// });

// getCountryData(`australia`);

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders?.[0];
//       const neighbor = `sdfdsgg`;

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       response.json();
//     })

//     .then((data) => renderCountry(data, `neighbour`))
//     .catch((err) => {
//       console.error(`${err} $#$%$%$`);
//       renderError(`Something went wrong $%$% ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener(`click`, function () {
//   getCountryData(`portugal`);
// });

// 256. Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// The Complete JavaScript Course 31
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })

//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} !@#@`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// 257. Asynchronous Behind the Scenes: The Event Loop
