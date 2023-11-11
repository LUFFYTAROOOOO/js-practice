const arr = [12,34,56,79,54,6,34]
// console.log(arr[0]);
arr.push("ayush")
arr.pop() //removes the last value
// console.log(arr);

// splice and  slice

let ma = [1,2,3,4,5,6]
// console.log("A",ma);

const myn1 = ma.slice(1,3) // shallow copy ,end not included
// console.log("slice:",myn1);

const myn2 = ma.splice(1,3)
// console.log("splice:",myn2);



const marvel_H = ["ironman","superman","batman"]
const random = [12,"fsdg",true]
const marvel_He = ["woinderwomen","catwomen","captainmarvel"]
// marvel_H.push(marvel_He,random)
// marvel_H.push(marvel_He)  // not very right way
// console.log(marvel_H);

const allmarvel=marvel_H.concat(marvel_He,random) // more convincing way
// console.log(allmarvel);


// one more way
const newheroes = [...marvel_H,...marvel_He,...random]  // spread technique
// console.log(newheroes);

let marvel = [1,2,3,4,5,[6,7],8,9,[12,23,45,[67,89]]]
marvelall = marvel.flat(Infinity)   // mix all the arrays in one
// console.log(marvelall);

// convert into array
// console.log(Array.isArray("ayush"));
// console.log(Array.from("ayush"));
// console.log(Array.from({name:"ayush"}));  // gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));