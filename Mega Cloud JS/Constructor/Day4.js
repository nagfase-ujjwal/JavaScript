// console.log(this);

// function test(a) {
//   console.log("Inside Function", this);
// }

// test(1);

// console.log("Global:", this);
// let details = {
//     name: "sam",
//     age: 23,
//     getDetails: function() {
//         console.log("Inside function and object",this);
//     }
// }
// details.getDetails();
// console.log(details.name);

// functions in JS have some methods (call, apply, bind)

// function Product(name, price, type) {
//     return {
//         name: name,
//         price: price,
//         type: type
//     };
// }

function Product(name, price, type) {
  let product = {};
  product.name = name;
  product.price = price;
  product.type = type;

  return product;
}
const Prod1 = Product("Nike", 50000, "Air sole");
console.log(Prod1);

// The same function above with Constructor Function
// Constructor function uses 'new' keyword to create object and assigns properties(name, price)
// "this" keyword refers to the object being created
//  "new" keyword to create multiple instances of objects; "new" keyword creating and returning an object

function NikeProduct(name, price, type) {
  this.name = name;
  this.price = price;
  this.type = type;
}

let product1 = new NikeProduct("New Loafers", 6542, "AIr neo");
console.log(product1);

// Self Practice - By using each parameter as a dynamic value

function NewsPaper(publisher, id, day) {
  this.publisherName = publisher;
  this.id = id;
  this.day = day;
  this.timeStamp = new Date();
}

// let id = Math.floor(Math.random() * 10); // generate a random number between 0 - 10 without decimal
// let timeStamp = parseFloat(Math.random() * 12 + 1);
let id = parseInt(Math.floor(Math.random() * 10 + 1)); // generate a random number between 1 - 10 without decimal

let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let index = Math.floor(Math.random() * weekDays.length);
let day = weekDays[index];

let Org = ["The Hindu", "The Express", "Hitvada", "JailBreaker"];
let userIndex = Math.floor(Math.random() * Org.length);
let publisher = Org[userIndex];

const news1 = new NewsPaper(publisher, id, day);
console.log(news1);

// new keyword is mandatory
// you can pass functions as argument values
// best used to create multiple objects of same type - Constructor

// Call Apply Bind

// call 39 min timestamp in mega
