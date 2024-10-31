// For In Loop on Object
const myObject={
    game1:"GTA",
    game2:"IGI"
}
for (const key in myObject) {
    // console.log(`${key}:- ${myObject[key]}`);
}


// For In Loop on Array
const numbers=[1,2,3,4,5]
for (const key in numbers) {
    // console.log(key);                            // Returns indexes
    // console.log(numbers[key]);                   // Returns elements
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);                            // Returns indexes
    // console.log(programming[key]);               // Returns elements
}


// For In Loop on String
const name="hello!"
for (const key in name) {
    // console.log(key);                            // Returns indexes
    // console.log(name[key]);                      // Returns elements
}


// For In Loop on MAPS
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
    // console.log(key);                // Returns nothing
}
