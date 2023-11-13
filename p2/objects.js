// object difining
//literal

let ayush = {   // here any case provided is considered as a string eg name is considered as "name"
    name: "ayush",
    age: 18,
    "full name": "ayush panchal",  // can't access this through .full name..........
    location: "mumbai",
    clg: "xyz",
    numbs: [1, 2, 3, 5, 6]
}
// console.log(ayush);

// to access a particular case need to specify it 

// console.log(ayush.name);
// console.log(ayush["numbs"]);

ayush.greeting = function () {
    // console.log("hi user");
}
ayush.greetingtwo = function () {
    // console.log(`hi,${this.name}`);
}
// console.log(ayush.greeting());
// console.log(ayush.greetingtwo());


// *****************************************************************************

// singleton

// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "xyz"
tinderuser.name = "ayush"
tinderuser.isloggedin = true
// console.log(tinderuser);


const user1 = {
    email: "ayush@gmail.com",
    fullname: {
        usersfullname: {
            firstname: "rohit",
            lastname: "sharma"
        }
    }

}
// console.log(user1.fullname);



const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// **********************************************************************************************


// destructuring
 const coures = {
    coursename : "new course",
    price: "1000",
    sir : "xyz"
 }

 const {coursename} =coures
//  console.log(coursename);