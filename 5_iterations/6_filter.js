const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach((item)=>{
//     console.log(item);
// })
// const cd = coding.forEach(item => {
//     // console.log(item);
//     return item                          // Returns Nothing
// });
// console.log(cd);                         // Returns Undefined


const nums=[1,2,3,4,5]
// const newNums = nums.filter((num)=>{
//     return num > 2                       // We can use return in filter
// })
// console.log(newNums);

// const newNums = []
// nums.forEach((num)=>{
//     if(num>2){
//         newNums.push(num)                // Push array in an empty array (Can function like filter)
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   books.forEach((item)=>{
//     if(item.genre=="Fiction")
//     console.log(item);
//   })

// const filtered = books.filter((item)=>item.genre=="Fiction")      // No need to write return when not using "{}"
// console.log(filtered);
let filteredBooks = books.filter((item)=>{
    return item.genre=="Fiction"                                     // You have to write return when using "{}"
})
filteredBooks = books.filter((item)=>{
    return item.publish>1990 && item.genre=="Non-Fiction"
})
console.log(filteredBooks);


