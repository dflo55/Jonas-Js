"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// 248. Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener(`load`, function () {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
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
  });
};

getCountryData(`portugal`);
getCountryData(`usa`);
getCountryData(`italy`);

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
