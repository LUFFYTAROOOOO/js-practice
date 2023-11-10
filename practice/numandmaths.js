const new1 = 12443;
// console.log(new1); 

const new2 = new Number(1244)
// console.log(new2);
// console.log(new2.toString().length);
// console.log(new2.toFixed(3));  sets the limit after the decimal to the provided value


const new3 = 10000000
// console.log(new3.toLocaleString()); prints the number according to american number system (can be change to required)

// console.log(Math);
// console.log(Math.abs(-4));  answer for mod (positive)
// console.log(Math.round(3.666666));
// console.log(Math.ceil(3.666666)); slightest increment in number changes to the next number
// console.log(Math.floor(3.666666));  vise vera se


// random function
// console.log(Math.random()); range 0-1
// console.log(Math.random()+1); min 1
// console.log(Math.floor(Math.random()*10)+1);

const min=10
const max = 20
console.log(Math.floor(Math.random()*(min +1))+min);