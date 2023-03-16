"use strict";
//
// 206. What is Object-Oriented Programming?
// OOP
// Class is like a blueprint which we can create new objects
// Making a new object from the class is called "instance"
// There are 4 fundamental principles to guide of OOP
//
// Abstraction - ignore or hide details that dont matter(keeping it simple)
//
// Encapsulation - Keep some properties and methods private inside the class
// so they are not accessible from outside the class
//
// Inheritance - Makes all properties and methods of a certain class available
// to a child class, forming a hierarchical relationship between classes.
// This allows us to reuse comon logic.
//
// Polymorphism - A child class can overwrite a method it inherited from a parent class.
//
// 207. OOP in JavaScript
// "Classical OOP": Classes
// Objects(instances) are instantiated from a class which functions like a blueprint
// Behavior(methods) is copied from class to all instances
//
// OOP in JS: Prototypes
// Objects are linked to a prototype object
// The prototype object contains methods and properties that all the objects that are
// linked to that prototype can acces and use.
// It's called Prototypal inheritance: the prototype contains methods(behavior) that
// are accessible to all objects linked to that prototype
// Behavior is delegated to the linked prototype object
//
// 3 Ways of implementing Prototypal Inheritance in Javascript
// 1. Constructor Functions - Technique to create objects from a function.
// - This is how bult in objects like Arrays, Maps, or Sets are actually implemented.
//
// 2. ES6 Classes - Modern Alternative to constructor function syntax
// - ES6 classes work exactly like constructor functions(easier syntax)
// - ES6 classes do NOT behave like classes in "classical OOP"
//
// 3. Object.create() - The easiest and most straightforward way of linking an object
// to a prototype object.
//
// 208. Constructor Functions and the new Operator
// Constructor Function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this(put methods in constructor function)
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYearbirthYear)
  //   }
};

const david = new Person(`David`, 1995);
console.log(david);
// david is an instance of Person
// 4 Steps that occur when calling function with new operator
// 1. Empty Object is created
// 2. Function is called, "this" keyword becomes the new empty object
// 3. new object is linked to protoype
// 4. Function automatically returns the empty object from the beginning

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1965);
console.log(matilda, jack);

console.log(david instanceof Person); // true
// console.log(jay instanceof Person); // false

// 209. Prototypes
// Every function in JS has a property called prototype including constructor functions
// Every object created by the constructor function will get access to all the methods
// and properties that we define on the constructor's prototype property
console.log(Person.prototype);
//

// Setting prototype methods onto the constructor function
// Any object created with the Person constructor function will get access to
// the constructor functions prototype property/methods (calcAge)
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Very basic prototypal inheritance
// The objects inherit the calcAge method from the constructor function's prototype
// The prototype of the objects below are Person.prototype
david.calcAge();
matilda.calcAge();
jack.calcAge();

// davids prototype is the prototype property of the Person constructor function
// Below we see david's prototype by using .__proto__
console.log(david.__proto__);
// The prototype of the david object is the prototype property of the constructor function
console.log(david.__proto__ === Person.prototype); // true
// Person.prototype is not the prototype of Person. It is whats going to be used
// as the prototype of all the objects that are created with the Peron
// constructor function

console.log(Person.prototype.isPrototypeOf(david)); // true
// Person.prototype is indeed the prototype of david
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
// .prototype is like .prototypeOfLinkedObjects

// Setting prototype properties onto the constructor function
Person.prototype.species = `Homo Sapiens`;
console.log(david.species, matilda.species); // get access to the prototype property

console.log(david.hasOwnProperty(`firstName`)); // true - its inside the object
console.log(david.hasOwnProperty(`species`)); // false - outside of object but has access
//
// 210. Prototypal Inheritance and The Prototype Chain
//
// 211. Prototypal Inheritcance on Built-In Objects
console.log(david.__proto__); // Person
// Object.prototype (top of prototype chain)
console.log(david.__proto__.__proto__); // Object
console.log(david.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor); // will point to the function itself
console.dir(Person.prototype.constructor); // points back to person

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // points back to object.prototype

// Dont do this
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir((x) => x + 1);

// 212. Coding Challenge #1
//
/*Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  const speed = (this.speed += 10);
  console.log(`${this.make} is going at ${speed}km/h`);
};

Car.prototype.brake = function () {
  const speed = (this.speed -= 5);
  console.log(`${this.make} is going at ${speed}km/h`);
};

const bmw = new Car(`BMW`, 120);
const mercedes = new Car(`Mercedes`, 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
