// singleton => Object.create
// object literals

const mySymbol = Symbol("ABD");
const user = {
  name: "Abdullah",
  email: "abdullah.google.com",
  role: "Student",
  Department: "CS",
  isLoggedIn: "true",                                   // Stores a boolean
  [mySymbol]: "key",
  grp: ["abd", "abd", "abd"],                           // Can also define further arrays
};
// Object.freeze(user)                                  // Wont overwrite further
// user.role="Programmer";                              // Overwrites the value
// console.log(user.role);                              // Returns a particular value from object
// console.log(user["Department"]);                     // Returns a particular value from object => Better way
// console.log(user[mySymbol]);                         // Thats how you can access symbol through object
// console.log(typeof [mySymbol]);                      // Object

// => In JavaScript, when you define a "function" inside an object, it is referred as "method" of that object

// user.greeting = function () {                        // Method
//     console.log("Hello User!");
// }
// console.log(user.greeting());

user.greeting2 = function () {                          // Method
  console.log(`Hello user,${this.name}`);               // Returns the name defined in the object
};
console.log(user.greeting2());
