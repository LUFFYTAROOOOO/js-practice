// dates 

let newdate = new Date()
// console.log(newdate .toString());
// console.log(newdate .toDateString());
// console.log(newdate .toJSON());
// console.log(newdate .toLocaleString());
// console.log(newdate .toLocaleDateString());
// console.log(newdate .toTimeString());
// console.log(typeof newdate);


//print  your provided date
// 2023 year, 0 month(jan), date
let newdate1 = new Date(2023,0,11,2,23,0)   
// console.log(newdate1.toLocaleDateString());
// console.log(newdate1.toLocaleString());
let newdate2 = new Date("2023-01-2") 
// console.log(newdate2.toLocaleString());




let mytime = Date.now()
// console.log(mytime); // time in milisec
// console.log(newdate2.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert to sec


let new1 = new Date()
console.log(new1);
console.log(new1.getDay());
console.log(new1.getHours());

// you can customize  the [localestring()]