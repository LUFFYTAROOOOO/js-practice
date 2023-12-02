
//for loops

for(let i=0;i<=10;i++){
    // console.log(`this is outer loop${i}`);
    for(let j=0;j<=10;j++){
        // console.log(`this is inner looop${j}`);
    }
}


// while and do while loops
let i=1;
while(i<10){
//    console.log(i);
    // i= i+2;
    i++;
}


do{
    // console.log(i);
    i++;
}while(i<100);


// new ietrations

// for of
const arr=[1,2,3,4,5]
for (const numb of arr) {
    // console.log(numb);
}

const greet = "hello"
for(const num of greet){
    // console.log(`${num} there!`);
}


// maps  (similar to array)
 const map =  new Map()  // recomanded for unique values 
map.set('IN',"INDIA")    // IN is the object holder and india is the value
// map.set('IN',"INDIA")
map.set('ra',"rajapur")
map.set('de',"delhi")

// console.log(map);
  
//loop on map

for(const [key,value] of map){
    // console.log(key,":",value);
}
 // objects are not iterable

 const obj1= {
    'game':'hi',
    'game':'bye'
 }

//  for(const [key,value] of obj1){
    // console.log(key,value);
//  }


const obj2={
    js:'javascript',
    c:'C',
    r:'rust'
}

for (const key in obj2) {
    // console.log(`${key} is ${obj2[key]}`);
}