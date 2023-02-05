"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener(`click`, openModal));
// Same as the forEach loop above
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(`s1coords`, s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(`Current Scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // console.log(
  //   `height/width viewport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // // old school way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });
  // Modern way (modern browsers)
  section1.scrollIntoView({ behavior: `smooth` });
});
//
// 192. Event Delegation: Implementing Page Navigation
/////////////////////////////
// Page Navigation

// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// Rules for Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  // Matching Strategy
  console.log(e.target);
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// 194. Building a Tabbed Component
// Tabbed Component
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

// Event Delegation
tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);

  // Guard Clause
  if (!clicked) {
    return;
  }

  // Remove Active Classes
  tabs.forEach((t) => t.classList.remove(`operations__tab--active`));
  tabsContent.forEach((c) => c.classList.remove(`operations__content--active`));

  // Active Tab
  clicked.classList.add(`operations__tab--active`);

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// 185. How the DOM really works
// The DOM allows us to make JS interact with the browser
// We can write JS to create, modify, and delete HTML elements; set styles,
// classes and attributes; and listen and respond to events
// DOM tree is generated from an HTML document, which we can then interact with
// DOM is a very complex API that contains lots of methods and properties
// to interact with the DOM tree (methods include -> .querySelector() /
// .addEventListener() / .createElement() / properties include -> .innerHTML /
// .textContent / .children / etc)
//
//
// 186. Selecting, Creating, and Deleting Elements \\
// Selecting Elements
// console.log(document.documentElement);

// Selects the first element that matches the class
// const header = document.querySelector(`.header`);
// Can select all elements of the same class
// const allSections = document.querySelectorAll(`.section`);
// console.log(allSections); // gives a node list

// document.getElementById(`sections--1`);
// const allBtns = document.getElementsByTagName(`button`);
// console.log(allBtns); // gives a HTML Collection

// console.log(document.getElementsByClassName(`btn`)); // gives a HTML collection
//
// Creating and inserting elements
// .insertAdjacentHTML
// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// message.textContent = `We use cookies for improved functuality and analytics`;
// message.innerHTML = `We use cookies for improved functuality and analytics.
//  <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message); // first child
// header.append(message); // last child
// header.append(message.cloneNode(true));
// header.before(message); // before the header (siblings)
// header.after(message); // after the header (siblings)
//
// Delete Elements
// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//   });

// 187. Styles, Attributes, and Classes
//
// Styles
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;

// console.log(message.style.color);

// console.log(getComputedStyle(message).color); // to find the hidden style

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + `px`;

// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = `Beautiful minimalist logo`;

// Non-Standard
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute(`designer`));
// logo.setAttribute(`company`, `Bankist`);

// console.log(logo.src); // absolute source
// console.log(logo.getAttribute(`src`)); // relative source, use this one

// const link = document.querySelector(`.nav__link--btn`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// Data Attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add(`c`, `j`);
// logo.classList.remove(`c`, `j`);
// logo.classList.toggle(`c`);
// logo.classList.contains(`c`); // not includes

// Dont use this below(it overrides all other classes)
// logo.className = `jonas`;
//
//
// // 188. Implementing Smooth Scrolling
// const btnScrollTo = document.querySelector(`.btn--scroll-to`);
// const section1 = document.querySelector(`#section--1`);

// btnScrollTo.addEventListener(`click`, function (e) {
//   const s1coords = section1.getBoundingClientRect();

//   // console.log(`s1coords`, s1coords);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log(`Current Scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

//   // console.log(
//   //   `height/width viewport`,
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );
//   // // scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );
//   // // old school way
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: `smooth`,
//   // });
//   // Modern way (modern browsers)
//   section1.scrollIntoView({ behavior: `smooth` });
// });

// Testing the getBoundingClientRect with the window
// const entireBody = document.querySelector(`body`);

// entireBody.addEventListener(`click`, function (e) {
//   console.log(e.target.getBoundingClientRect());
// });
//
//
// 189. Types of Events and Event Handlers
// const h1 = document.querySelector(`h1`);

// const alertH1 = function (e) {
//   alert(`addEventListener: Great! You are reading the heading :)`);

//   // h1.removeEventListener(`mouseenter`, alertH1);
// };

// h1.addEventListener(`mouseenter`, alertH1);

// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);
// Old School Way
// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great! You are reading the heading :)`);
// };
//
//
// 190. Event Propagation: Bubbling and Capturing
//
// 191. Event Propagation in Practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`CONTAINER`, e.target, e.currentTarget);
// });

// document.querySelector(`.nav`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`NAV`, e.target, e.currentTarget);
// });
//
//
// 193. DOM Traversing
// const h1 = document.querySelector(`h1`);

// // Going downwards: child
// console.log(h1.querySelectorAll(`.highlight`));
// console.log(h1.childNodes);
// console.log(h1.children); // works only for direct children
// h1.firstElementChild.style.color = `white`;
// h1.lastElementChild.style.color = `orangered`;

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(`.header`).style.background = `var(--gradient-secondary)`;

// h1.closest(`h1`).style.background = `var(--gradient-primary)`;

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = `scale(0.5)`;
//   }
// });
//
//
