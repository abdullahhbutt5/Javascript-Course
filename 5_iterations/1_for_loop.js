// For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// console.log(element);                          // Return error coz element is defined inside the scope


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//    } 
// }


// for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i*j} `);
//    } 
// }


// let myArray = ["flash", "batman", "superman"]
// console.log(`Length of array is : ${myArray.length}`);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }


// Break
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break                                     // Skips all the remaining elements including the current element
//     }
//    console.log(`Value of i is ${index}`);
// }


// Continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue                                 // Just skips the current element
//     }
//    console.log(`Value of i is ${index}`);  
// }