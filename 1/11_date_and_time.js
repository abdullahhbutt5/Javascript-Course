// let date=new Date()
// console.log("Simple: ",date);
// console.log("To String: ",date.toString());
// console.log("To Date String: ",date.toDateString());
// console.log("To Locale String: ",date.toLocaleString());
// console.log("To Locale Date String: ",date.toLocaleDateString());
// console.log("To ISO String: ",date.toISOString());
// console.log("To JSON: ",date.toJSON());
// console.log("Type: ",typeof date);

// new Date(year,monthIndex,date,hours,minutes,seconds,ms)
// let myDate=new Date(2023,10,10)                       
// let myDate=new Date(2023,0,23,5,2)                    // Month starts form 0     
let myDate=new Date("2023-01-23")                        // DD MM YY         
// console.log(myDate.toLocaleString());

let timeStamp=Date.now()
// console.log(timeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/100));

let date=new Date()
// console.log(date.getFullYear());                     // 2024
// console.log(date.getMonth()+1);                      // Month Starts from 0
// console.log(date.getDay());                          // Monday
// console.log(date.getDate());                         // 14
// console.log(date.getTime());                         // Time           
console.log(date.toLocaleString('default',{
    // weekday:'long',                                  // Prints Monday not Mon 
    month:'long'                                        // Prints October not oct
}));








