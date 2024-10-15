// const arr=[1,2,3,4,5,6,7,8,9]
const arr=["Abdullah","Ali","Ahmed"]
// console.log(arr);
// console.log(typeof arr);

const myArr=new Array(1,2,3,4,5,6,7,8,9);
// console.log(myArr);
// myArr.push(10)                              // Adds elements at last of the array
// myArr.push(11)
// myArr.push(12)
// myArr.unshift(0)                            // Adds elements at the begining of array
// myArr.shift()                               // Removes the first element of the array
// console.log(myArr);
// console.log(typeof myArr);

// console.log(myArr.includes(9));             // Returns boolean
// console.log(myArr.includes(10));

// console.log(myArr.indexOf(9));              // Returns element at that index else returns -1
// console.log(myArr.indexOf(14));

// const newArr=myArr.join()
// console.log(newArr);                        // Returns array as string

// SLICE AND SPLICE

console.log("Before SLicing: ",myArr);
const arr1=myArr.slice(1,3)                    // Does not effect orignal array and range not included
console.log("Sliced part: ",arr1);
console.log("After Slicing: ",myArr);

console.log("Before Splicing: ",myArr);
const arr2=myArr.splice(1,3)                    // Effects the orignal array and range is included
console.log("Spliced part: ",arr2);
console.log("After Splicing: ",myArr);