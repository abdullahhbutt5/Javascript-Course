const arr=["a","b","c"]
const newArr=["d","e"]
// console.log(arr);
// console.log(newArr);

// arr.push(newArr)                               // Push new array at last as a single element in the orignal array
// console.log(arr);

// const fullArr=arr.concat(newArr)
// console.log(fullArr);                          // Concats the elements of the array and returns new array limited

// const fullNewArr=[...arr,...newArr]            // Spread => Same as concats but used most also unlimited
// console.log(fullNewArr);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array.flat(Infinity));     // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("abd"));                // Returns boolean
console.log(Array.from("abd"));                   // Creates an array from an iterable object
console.log(Array.from({name:"abd"}));            // Interesting => Returns empty (Limited)
// console.log(Array.of("abdullah"));             // Not works

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));      // Returns a new array from a set of elements
