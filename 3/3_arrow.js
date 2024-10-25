const user={
    username:"Abdullah",
    website:"Youtube",
    welcomeUser: function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);                 // Returns empty 

    }
}
user.welcomeUser()
// user.username="sam"                        // Updates the username
user.welcomeUser()
// console.log(this);                         // Returns empty 
// console.log(this.username);                // Returns undefined 


// function abd () {
//     let username="Abd"
//     console.log(this.username);             // Returns undefined. We Cannot use this in function it can used in object
//     console.log(this)                       // Returns empty
// }
// abd()

// const abd = function () {                   // Another way of defining a function
//     let usernmae="abd"
//     console.log(this.username);             // Returns undefined. We Cannot use this in function it can used in object
//     console.log(this)                       // Returns empty
// }
// abd()

// const abd = () => {                         // Arrow function
//     let username="Abd"
//     console.log(this.username);             // Returns undefined. We Cannot use this in function it can used in object
//     console.log(this)                       // Returns empty
// }
// abd()

// const addTwo = (num1,num2) => {             // Arrow Function for adding two numbers
//     return num1+num2                        // Explicit return
// }
// console.log(addTwo(3,6))

// const addTwo = (num1,num2) => num1+num2     // Implicit return     
// console.log(addTwo(3,5));

// const addTwo = (num1,num2) => (num1+num2)   // Implicit return
// console.log(addTwo(3,5));

const addTwo = () => ({username:"Abd"})        // Implicit return of object
console.log(addTwo(3,4))