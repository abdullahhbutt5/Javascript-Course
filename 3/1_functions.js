// function sayMyName() {
//     console.log("A");
//     console.log("B");
//     console.log("D");

// }
// sayMyName()

function addTwoNum(number1,number2) {
    let result=number1+number2
    return result                            // => If not returned output of "console.log(result)" will be undefined
    // return number1+number2
}
// console.log(addTwoNum(7,1))
const result=addTwoNum(7,1)
// console.log("Result: ",result);


function userLogin(username='abd') {
    if (!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLogin())
// console.log(userLogin('Abd'))             // Overwrites the value given as parameter
// console.log(userLogin('Butt'))


function calculatePrice(num,...price) {      // (...price => Rest)
    return price
}
// console.log(calculatePrice(200,300,400,500,600))

const user={
    username:"Abdullah",
    price:399
}
// console.log(typeof user);
function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);   
}
// handleObject(user)                        // Calls the object created above
handleObject({                               // Direct object 
    username:"Butt",
    price:299
})

// **************************Array********************************
// const arr=[200,300,400]
function getSecond(getsec) {
    return getsec[1]
}
// console.log(getSecond(arr));               // Calls the Array created above
console.log(getSecond([200,300,400]));        // Direct Array

