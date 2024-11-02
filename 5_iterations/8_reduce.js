const arr=[1,2,3,4,5]
// const reduced = arr.reduce(function(acc,curr){                          // Reduce with simple function
//     console.log(`acc is : ${acc} and currval is : ${curr}`);
//     return acc+curr
// },0)
// console.log(reduced);

// const reduced = arr.reduce((acc,curr)=>acc+curr,0)            // Reduce with arrow function
// console.log(reduced);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const reduced = shoppingCart.reduce((acc,curr)=>{
    console.log(`acc is : ${acc} and currval is : ${curr.price}`);
    return acc+curr.price
},0)
console.log(reduced);
