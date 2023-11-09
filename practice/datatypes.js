// javascript is a dynamically typed language (as there is not compulsion on defining the data type  of a variable,the machine interpret it during run time).
 
// primitive

// 7 types: String,number,boolean,null(empty),undefined,symbol,bigint

const score =100;
const anotherid = Symbol('123')
let id = Symbol('123')
// console.log(id===anotherid);
const bignumber = 21345655432332143n
// console.log(bignumber);

// console.log(anotherid);
 
// reference (non-primitive)

// arrays,obejcts,funtion.  most of the time their typeof is object

// arrays
const heros = ["superman","batman","spiderman","hulk"]

let myobj ={ //object
  name : "ayush",
  age:18
}

// function

let myfunction=function myname(){
    console.log("hi");
}

console.log(typeof id);

