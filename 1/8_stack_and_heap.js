// Primitive => Stack   &   Non-Primitive => Heap

let name='Abdullah'
let anotherName=name
anotherName='butt'                                  // Pass by value
console.log("Name: ",name)
console.log("Another Name: ",anotherName)
console.log("Name: ",name)


let objOne={
    nameobj:'Abdullah',
    anotherName:'Arshad'
}
let objTwo=objOne
objTwo.anotherName='Butt'                           // Pass by reference
console.log('Obj One: ',objOne);
console.log('Obj Two: ',objTwo);
