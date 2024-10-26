// Immediately Invoked Function Expressions (IIFE)

// function chai() {                                  // Simple function
//     console.log("Hello there!");
// }
// chai()

// (()=>{                                     
//     console.log("Hello there!");                   // IIFE function (arrow)
// })();

((name)=>{                                     
    console.log(`Hello there! ${name}`);              // IIFE function (arrow)
})("abd");                                            // You can also pass value to parameters

// Semicolon is require if you want to write two or more IIFE functions

(function chai() {                                    // IIFE function (named)
    console.log("Hello there!");
})()
