// *****************************************(NUMBERS)*************************************************

const num=10                                        // Type => Number
console.log(num);
// console.log(`Type of ${num} is ${typeof num}`);

const anotherNum=new Number(10000000)               // Type => It is also number but type is object
console.log(anotherNum);
// console.log(`Type of ${anotherNum} is ${typeof anotherNum}`);
                 
// Properties of Number
// console.log(anotherNum.toString());              // Converted into string
// console.log(anotherNum.toString().length);       // Now we can apply string properties on it
// console.log(anotherNum.toFixed(1));              // Returns digits after point that you want
// console.log(anotherNum.toPrecision(3));          // Same as toFixed but also round off the num
// console.log(anotherNum.toLocaleString());        // Returns the value with commas

// ******************************************(MATH)*************************************************

// console.log(Math);                               // Type => Object
// console.log(Math.abs(-4));                       // Returns positive  value
// console.log(Math.round(4.6));                    // Returns round off value
// console.log(Math.ceil(4.6));                     // Returns round off (Top) value
// console.log(Math.floor(4.5));                    // Returns round off (Base) value
// console.log(Math.min(2,3,4,5,6,1,3,4));          // Returns minimum value
// console.log(Math.max(2,3,4,5,6,1,3,4));          // Returns maximum value
// console.log(Math.random());                      // Returns random number between 0 and 1
// console.log(Math.floor((Math.random()*10)+1))    // Returns random number between 1 and 10

const min=1
const max=100
console.log(Math.floor(Math.random()*(max-min+1))+min);

