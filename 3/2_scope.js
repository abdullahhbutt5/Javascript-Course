var a=2                
let b=5
const c=7
if(true){
    var a=3
    let b=6
    const c=8
    // console.log("Inner var: ",a);
    // console.log("Inner let: ",b);
    // console.log("Inner const: ",c);
}
// console.log("Outer var: ",a);
// console.log("Outer let: ",b);
// console.log("Outer const: ",c);

function one() {
    const username="abd"
    function two() {
        const website="youtube"
        // console.log(username);                 // Child can use parent's element
    }
    // console.log(website);                      // Parent cannot use child's element
    two()
}
one()


if(true){
    const username="Abdullah"
    if(username==="Abdullah"){
        const website="Youtube"
        // console.log(username+website); 
    }
    // console.log(website);                      // Parent cannot use child's element
}
// console.log(username);                         // Returns an error coz username was declared inside the scope


// **********intresting***********

// console.log(addOne(5))                         // Does'nt return error
function addOne(num) {
    return num+1
}
console.log(addOne(5))     


// console.log(addTwo(5))                         // Returns an error coz function is declared in a variable
const addTwo = function addTwo(num) {
    return num+2
}
console.log(addTwo(5))