// function sayMyName() {
//     console.log("A");
//     console.log("B");
//     console.log("D");

// }
// sayMyName()

function addTwoNum(number1,number2) {
    let result=number1+number2
    return result                             // => If not returned output of "console.log(result)" will be undefined
    // return number1+number2
}
// console.log(addTwoNum(7,1))
const result=addTwoNum(7,1)
console.log("Result: ",result);


function userLogin(username='abd') {
    if (!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLogin())
console.log(userLogin('Abd'))                // Overwrites the value given as parameter
console.log(userLogin('Butt'))
