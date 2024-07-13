console.log("From here on we will learn Apply method");

const kitchen = {
  name: "Kitchen",
  purpose: "Cook food",
  meal: "Rice",
  cookFood(a, b) {
    console.log(`serving ${this.meal} and ${a} and ${b}`);
  },
};

const livingRoom = {
  name: "Living Room",
  purpose: "Chill",
  meal: "Maggie",
};

const bed_Room = {
  name: "Bed Room",
  purpose: "sleep",
  meal: "Pasta",
};

kitchen.cookFood.apply(livingRoom, ["b", "c"]);
kitchen.cookFood.apply(bed_Room);

// Apply() method is similar to call() method in functionality
// But one difference, we can pass n number of arguments in call but we need to pass arguments in apply() method in the form of array
