// For each loop on array
const programming = ["js", "rb", "py", "java", "cpp"]
// programming.forEach (function (element){                
//     console.log(element);
// })

// programming.forEach(element => {                       // Arrow function
//     console.log(element);
// });

// function callback(item){                               // Call back function
//     console.log(item);
// }
// programming.forEach(callback)   

// programming.forEach ((item,index,arr)=> {
//     console.log(item,index,arr);
// })


// For each loop on array
const  coding=[
    {
        country:"Pakistan",
        batsman:"Babar Azam"
    },
    {
        country:"India",
        batsman:"Virat Kohli"
    },
    {
        country:"Austrailia",
        batsman:"Steve smith"
    }
]
coding.forEach((item)=>{
    console.log(item);
    // console.log(item.country);               // Returns Country
    // console.log(item.batsman);               // Returns Batsman
})