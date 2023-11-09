//    stack and heap

// primitive uses stack  
// non primitive uses heap  


// stack memroy (call by value logic)
let email1 = "ayush@hbf.com"
let email2  = email1
email2 = "ayush123@hbf.com"
// console.log(email2);
// console.log(email1);


// heap memroy (call b reference logic)
let user1 = {
    name : "ayush",
    email : "ayush123@hbf.com"
}

let user2 = user1
user2.email = "ayushpancha@hbf.com"
// console.log("this is user2",user2);
// console.log("this is user1",user1);