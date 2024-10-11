// const name='Abdullah'
// const lastName='Butt'
// console.log(name,lastName,"5")                           // Old method
// console.log(`Hey my name is ${name} ${lastName} 5`)      // New Method => String Interpolation

// const dep=new String('Computer Science')                 // Creates a new string
// console.log(dep);

// console.log(dep.length);                                 // Returns the length of string

// console.log(dep.toUpperCase());                          // Returns the string in UPPERCASE

// console.log(dep.charAt(9));                              // Returns index of string of that part 

// console.log(dep.indexOf(' '));                           // Returns part of string at that index

// const subDep=dep.substring(5,15);                        // Returns a part of string as substring from orignal string (Only positive)
// console.log(subDep);

// const sliceDep=dep.slice(5,15)                           // Returns slice of string from orignal string (Also negative)
// console.log(sliceDep);

// const address="           Gujranwala        "
// console.log(address);
// console.log(address.trim());                      // Removes extra spaces automatically

const url='https://abdulah.com/abdullah%20butt'
// console.log(url.replace('%20','-'));              // Replace specific part with your desired part

// console.log(url.includes('ali'));                 // Tells a specific ppart of string is present or not

console.log(url.split('%'));                      // Splits string on the asis of what you have given

