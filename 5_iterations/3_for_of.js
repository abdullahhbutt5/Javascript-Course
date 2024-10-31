// For Of Loop
// {" "," "," "}
// [{},{},{}]

// For Of Loop on Array
const numbers=[1,2,3,4,5]
for (const num of numbers) {
    console.log(num);
}

const names=["abd","abd","abd"]
for (const val of names) {
    // console.log(val);
}


// For Of Loop on String
const greetings="hello!"
for (const greet of greetings) {
    // console.log(greet);
}


// For Of Loop on MAPS
const map = new Map();
map.set("PK","Pakistan")
map.set("IN","Idia")
map.set("USA","United States Of America")
map.set("UAE","United Arab Emirates")

// for (const val of map) {
//     console.log(val);
// }

for (const [key,val] of map) {
    // console.log(`${key} :- ${val}`);
}


// For Of Loop on Object
const myObject={
    game1:"GTA",
    game2:"IGI"
}

// for (const val of myObject) {
//     console.log(val);                        // Returns TypeError: myObject is not iterable
// }

// for (const [key,val] of myObject) {
//     console.log(`${key} :- ${val}`);            // Returns TypeError: myObject is not iterable
// }