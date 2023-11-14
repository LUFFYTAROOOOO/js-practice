  


// false values 
// false,0,-0,null ,undefined,nan,0n(bigint) 
// others are true
//true
// "0",'false',function(){}

// checking of object 

let obj = {}

if (Object.keys(obj).length==0) {
    // console.log(`hurrrrr`);
}


// nullish coalescing operator(??)

// let va1 = undefined ?? null
// let va1 = null ?? 10
// let va1 = undefined ?? 10

let va1 = undefined ?? 10 ?? 20    // it returns the first value accept null or undefined

console.log(va1);

