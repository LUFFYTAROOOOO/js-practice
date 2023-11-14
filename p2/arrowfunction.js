 const user = {
    username:"ayush",
    fee:199,

    welcomemessaeg:function(){
       // this reffers to the current placeholder foran entity
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }
    
 }

//  user.welcomemessaeg()
//  user.username ="sam"
//  user.welcomemessaeg()

// console.log(this);



const hi = () => {
    let username = "ayush"
    console.log(this.username);
}
// hi()



// *******************************************************************************************





// arrow function 

// const fun = (num1) => {
//    return num1
// }


// const fun = (num1) =>  num1 // without parentcase
// const fun = (num1) =>  (num1) // without parentcase
const fun = (num1) =>  ({username:"ayush"}) 
// console.log(fun(4))