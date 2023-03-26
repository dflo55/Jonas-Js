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
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// Never do this(put methods in constructor function)
//   this.calcAge = function(){
//     console.log(2037 - this.birthYearbirthYear)
//   }
// };

// const david = new Person(`David`, 1995);
// console.log(david);
// // david is an instance of Person
// // 4 Steps that occur when calling function with new operator
// // 1. Empty Object is created
// // 2. Function is called, "this" keyword becomes the new empty object
// // 3. new object is linked to protoype
// // 4. Function automatically returns the empty object from the beginning

// const matilda = new Person(`Matilda`, 2017);
// const jack = new Person(`Jack`, 1965);
// console.log(matilda, jack);

// console.log(david instanceof Person); // true
// // console.log(jay instanceof Person); // false

// // 209. Prototypes
// // Every function in JS has a property called prototype including constructor functions
// // Every object created by the constructor function will get access to all the methods
// // and properties that we define on the constructor's prototype property
// console.log(Person.prototype);
// //

// // Setting prototype methods onto the constructor function
// // Any object created with the Person constructor function will get access to
// // the constructor functions prototype property/methods (calcAge)
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // Very basic prototypal inheritance
// // The objects inherit the calcAge method from the constructor function's prototype
// // The prototype of the objects below are Person.prototype
// david.calcAge();
// matilda.calcAge();
// jack.calcAge();

// // davids prototype is the prototype property of the Person constructor function
// // Below we see david's prototype by using .__proto__
// console.log(david.__proto__);
// // The prototype of the david object is the prototype property of the constructor function
// console.log(david.__proto__ === Person.prototype); // true
// // Person.prototype is not the prototype of Person. It is whats going to be used
// // as the prototype of all the objects that are created with the Peron
// // constructor function

// console.log(Person.prototype.isPrototypeOf(david)); // true
// // Person.prototype is indeed the prototype of david
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
// // .prototype is like .prototypeOfLinkedObjects

// // Setting prototype properties onto the constructor function
// Person.prototype.species = `Homo Sapiens`;
// console.log(david.species, matilda.species); // get access to the prototype property

// console.log(david.hasOwnProperty(`firstName`)); // true - its inside the object
// console.log(david.hasOwnProperty(`species`)); // false - outside of object but has access
// //
// 210. Prototypal Inheritance and The Prototype Chain
//
// 211. Prototypal Inheritcance on Built-In Objects
// console.log(david.__proto__); // Person
// // Object.prototype (top of prototype chain)
// console.log(david.__proto__.__proto__); // Object
// console.log(david.__proto__.__proto__.__proto__); // null

// console.log(Person.prototype.constructor); // will point to the function itself
// console.dir(Person.prototype.constructor); // points back to person

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   const speed = (this.speed += 10);
//   console.log(`${this.make} is going at ${speed}km/h`);
// };

// Car.prototype.brake = function () {
//   const speed = (this.speed -= 5);
//   console.log(`${this.make} is going at ${speed}km/h`);
// };

// const bmw = new Car(`BMW`, 120);
// const mercedes = new Car(`Mercedes`, 95);

// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();
//
// 213. ES6 Classes

// class expression
// const PersonCl = class {};
// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Methods

//   // methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(` `)) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log(`Hey there!`);
//   }
// }

// const jessica = new PersonCl(`Jessica Davis`, 1996);
// console.log(jessica);
// jessica.calcAge();
// // console.log(jessica.age); // using the getter above

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

class Character {
  constructor(name, classType, specialAtk) {
    this.name = name;
    this.classType = classType;
    this.specialAtk = specialAtk;
  }

  attack() {
    console.log(`${this.classType} ${this.name} used ${this.specialAtk}`);
    // if (this.specialAtk === `Fireball`) {
    //   console.log(`${this.name} used ${this.specialAtk}`);
    // } else if (this.specialAtk === `Fury Fists`) {
    //   console.log(`${this.name} used ${this.specialAtk}`);
    // } else if (this.specialAtk === `Razor Edge`) {
    //   console.log(`${this.name} used ${this.specialAtk}`);
    // }
  }
}

const arnold = new Character(`Arnold`, `Mage`, `Fireball`);
const desmond = new Character(`Desmond`, `Brawler`, `Fury Fists`);
const alma = new Character(`Alma`, `Assassin`, `Razor Edge`);

arnold.attack();
desmond.attack();
alma.attack();

// 214. Setters and Getters
const account = {
  owner: `David`,
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.latest.movements);

// const walter = new PersonCl(`Walter`, 1965);

// 215. Static Methods
// Methods that are attached to its constructor
// Array.from()
// Number.parseFloat();

//refer to first constructor at the top
// Person.hey = function () {
//   console.log(`Hey there!`);
// };

// Person.hey();
// david.hey(); // error

// refer to the class PersonCl
// PersonCl.hey();

// 216. Object.create
// manually set prototypes to any object

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // const steven = Object.create(PersonProto);
// steven.name = `Steven`;
// steven.birthYear = `2002`;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto); // true

// const sarah = Object.create(PersonProto);
// sarah.init(`Sarah`, 1979);
// sarah.calcAge();

// 217. Coding Challenge #2
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     const speed = (this.speed += 10);
//     console.log(`${this.make} is going at ${speed}km/h`);
//   }

//   brake() {
//     const speed = (this.speed -= 5);
//     console.log(`${this.make} is going at ${speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl(`Ford`, 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);

// 218. Inheritance between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student(`Mike`, 2020, `Computer Science`);
console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;

// 219. Coding Challenge #3
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Great example of Polymorphism between both constructor functions accelerate prototype method

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV(`Tesla`, 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.accelerate();

// 220. Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(` `)) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log(`Hey there!`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first (super)
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl(`Martha Jones`, 2012, `Computer Science`);
martha.introduce();
martha.calcAge();

// 221. Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init(`Jay`, 2010, `Computer Science`);
jay.introduce();
jay.calcAge();

// 222. Another Class Example
// class Account {
//   constructor(owner, curr, pin) {
//     this.owner = owner;
//     this.curr = curr;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public interface
//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approvedLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approvedLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const account1 = new Account(`Jonas`, `EUR`, 1111);
// console.log(account1);

// account1.deposit(250);
// account1.withdraw(140);

// 223. Encapsulation: Protected Properties and Methods
// using underscore on stuff we want protected, not accessible from outside
class Account {
  constructor(owner, curr, pin) {
    this.owner = owner;
    this.curr = curr;
    this._pin = pin;
    // Protected Property (_movements)
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approvedLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approvedLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const account1 = new Account(`Jonas`, `EUR`, 1111);
console.log(account1);

account1.deposit(250);
account1.withdraw(140);

console.log(account1.getMovements());
