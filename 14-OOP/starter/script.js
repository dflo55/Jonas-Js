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
console.log(Person.prototype);

// Setting prototype methods onto the constructor function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Very basic prototypal inheritance
david.calcAge();
matilda.calcAge();
jack.calcAge();

// davids prototype is the prototype property of the Person constructor function
console.log(david.__proto__);
// The prototype of the david object is the prototype property of the constructor function
console.log(david.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(david)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
// .prototype is like .prototypeOfLinkedObjects

// Setting prototype properties onto the constructor function
Person.prototype.species = `Homo Sapiens`;
console.log(david.species, matilda.species); // get access to the prototype property
