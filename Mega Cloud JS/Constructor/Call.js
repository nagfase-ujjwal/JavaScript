console.log("From here on We will learn Call method");

const kitchen = {
  name: "Kitchen",
  purpose: "Cook",
  meal: "Rice",
  cookFood(drink, a, b, c) {
    console.log(`serving ${this.meal} and ${drink} and ${a} and ${b} and ${c}`);
  },
};

const livingRoom = {
  name: "Living Room",
  purpose: "chill",
  meal: "maggie",
};

const bedRoom = {
  name: "Bedroom",
  purpose: "sleep",
  meal: "pizza",
};

let drinks = ["Coke", "Pepsi", "Beer", "Rum"];

let drinksIndex = Math.floor(Math.random() * drinks.length);
let servedDrinks = drinks[drinksIndex];

kitchen.cookFood.call(livingRoom); // this is call method =>  Kitchen object points to cookfood() method which calls livingRoom Object
kitchen.cookFood.call(bedRoom, servedDrinks, "d", "e", "c");
kitchen.cookFood.call(livingRoom, servedDrinks);

// call() method changed the parent object/value for "this" keyword from kitchen => livingRoom object
// In a sense, we are using the cookFood() method within the livingRoom object

// we can pass n number of arguments
// call accepts the arguments passed directly
// But one difference, we can pass n number of arguments in call but we need to pass arguments in apply() method in the form of array
