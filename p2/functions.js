 function ayush (){
    console.log("hi");
}

// ayush()

function add(num1,num2){
    console.log(num1 + num2);
}

// add() // not  a number
// add(2,3)  //5
// add(3,"4") // 34
// add(3,"a") // 3a
// add(3,null) //3

 function mul(number1,number2){
    // console.log(number1*number2)

    // let result = number1*number2
    // return result
       
    return number1*number2
 }

//  const result=mul(3,4)
//  console.log("result",result);





function login(username){
    return `${username} just logged in`
}

// console.log(login("ayush"))
// console.log(login()) // undifined



//when adding multiple items in your cart 
function calculatecardprice(...num){ // ...num acts as a rest based on the situation
    return num
}

// console.log(calculatecardprice(200,300,400));



// passing an object to a function 


const user ={
    username:"ayush",
    prices:200
}
function user1(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// user1(user)

// direct passing object
// user1({
//     username:"rohit",
//     prices:2000
// })


let arrr = [300,4000,50000,100000]
function returnsecondvalue(carryarray){
   return carryarray[2]
}
// console.log(returnsecondvalue(arrr));
// console.log(returnsecondvalue([300,400,50000,100000]));



// **************************************************************************************************


// scope
if(true){
let a =12
const b =34
var c = 123
}

// console.log(a);  // not defined
// console.log(b);  // not defined 
// console.log(c);  // thus var is not used frequently
 

function one(){
    const username ="ayush"
    function two(){
        const website = "yotube"
        console.log(username);
    }
    // console.log(website);  // not defined

    two()
}

// one()


if(true){
   const username = "ayush"
   if(username === "ayush"){
    const website = "youtube"
    // console.log(username  + website);

   }
//    console.log(website);
}
// console.log(username);

 


// addone(6)
function  addone (num){
   return num +1
}

// addtwo(5)  // gives an error cant all as th efunction is stied in a variable
const addtwo = function (num){
    return num +2
}


