// const user=new Object()
// console.log(typeof user);

const user={}
user.name="abdullah"
user.lastname="butt"
user.id="a@gmail.com"
// console.log(user);
// console.log(user.id);

const myUser={
    email:"a@gmail.com",
    username:{
            userfullname:{
                name:"abdullah",
                lastname:"butt"
            }
        }
}
// console.log(myUser)
// console.log(myUser.userfullname);                          // Undefined
// console.log(myUser.username.userfullname);                 // Correct
// console.log(myUser.username.userfullname.name);
// console.log(myUser.username.userfullname.lastname);

const user1={1:"a",2:"b"}
const user2={3:"a",4:"b"}
const user3={5:"a",6:"b"}
// user4={user1,user2,user3}
// user4=Object.assign({},user1,user2,user3)     // Copy the values from one or more source objects to a target object
// console.log(user4);

// user4={...user1,...user2,...user3}      // Copy the values from one or more source objects to a target => Most used
// console.log(user4);


const userArray=[
    {
        id:"a",
        email:"b"
    },
    {
        id:"a",
        email:"b"
    },
    {
        id:"a",
        email:"b"
    }
]
// console.log(userArray[1]);

// console.log(Object.keys(user));                 // Returns key
// console.log(Object.values(user));               // Returns values
// console.log(Object.entries(user));              // Returns both keys and values
// console.log(Object.hasOwnProperty('name'));    // Returns boolean


const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);
