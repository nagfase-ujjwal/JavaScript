console.log("From here on we will learn Bind method");

const kitchen = {
  name: "Kitchen",
  purpose: "Cook",
  meal: "Rice",
  cookFood(drinks) {
    console.log(`serves ${this.meal} and ${drinks}`);
  },
};

const living_Room = {
  name: "Living Room",
  purpose: "Sleep",
  meal: "Chicken",
};

let getFood = kitchen.cookFood.bind(living_Room, "Rum");
getFood(); // getFood() is now a function that is why we are calling it like this

// Bind() method creates a new function
// so here getFood now became a function
// we are using the bind method to create a new function getFood based on the cookFood method of the kitchen object, but with living_Room as the this context.
// we can store this function in getFood and invoke it at a later point of time when required
