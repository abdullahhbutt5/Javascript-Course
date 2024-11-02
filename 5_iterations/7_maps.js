const nums = [1,2,3,4,5,6,7,8,9,10]
// const maped = nums.map((items)=>{
//     return items*10
// })
// console.log(maped);
const maped = nums
    .map((items)=>items*10)              
    .map((items)=>items+1)
    .map((items)=>items+1)
    .filter((item)=>item>40)             // This is called chaining (Using multiple map or filter)
console.log(maped);
