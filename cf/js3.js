// higher order array and looops


// for of

const arr= [1,2,3,5,4]

for (const i of arr) {
    // console.log(i);
}
const greet = "hello worls"

for (const it of greet) {
    
    // if(it == " "){
        // continue;
    // }console.log(it);
}


// maps 

const map = new Map()
map.set('IN',"INDIA")
map.set('AM',"america")


for (const [key,value] of map) {
    //  console.log(key, value);
    
 }
// for in on map is not iterable..... 
 for (const key in map) {
   console.log(key);
 }

 // objects 

 // not iteratable
 const obj1 = {
    'game1':'nfs',
    'game2':'cs'
 }

//  for (const [key,value] of obj1) {
//     // console.log(key, ':',value);
//  }


// to iterate object
 const obj2 = {
    js:'javascript',
    c:'c',
    r:'rust'
 }

//  for (const key in obj2) {
//         console.log(`${key} :${obj2[key]}`);
//  }

const aarr = ["js","c","c++","j"]
// for (const key in aarr) {
//     console.log(aarr[key]);
// }


  // for each loop

  const coding = ["js","c","j","rust"]

//   coding.forEach(function (val){
//     console.log(val);
//   })

// arrow function

// coding.forEach( (val) => {
//     console.log(val);
// } )



// function me(item){
//     console.log(item);
// }

// coding.forEach(me)

//[{}{}{}]

const arr1 = [
    {
        game:'nfs',
        file :'nfs'
    },{
        game:'cs',
        file:'cs'
    },{
        game:'gta',
        file:'gta'
    }
]

arr1.forEach( (item) => {
    console.log(item.game);
})