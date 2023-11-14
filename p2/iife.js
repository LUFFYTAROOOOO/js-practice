// immediately invoked the function expression (IIFE)

  // named iife
( function ayush(){
    console.log(`hi there`);
} )();  // ifwe don't put the semicolon error will arise

// ayush()

(function panchal(){
    console.log(`nice to meet you`);
})();


// un- named iife
( () => {
    console.log(`bye`);
} )();


// passing the parameter here 
//  @name => is the defining parent
( (name) => {
    console.log(`welcome back ${name}`);
} )(`ayush`);  // @`ayush` here is the parameter inside the formal parameter bracket(receiver)



// ****************************************************************************************************************************************


// java execution context

// 1. global execution context is carried out  (storing of variables)
// 2.functional execution context (all calculations)
// included in global: (eval execution context )

// code: 
// 1.memory creation phase:(mcp)
// 2.execution phase: (ec)

// code:
let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1 + num2
    return total
}
//  let result1 = addnum(val1,val2)
//  let result2 = addnum(10,2)

//    execution: 
// step1: (GE) :this
// step2: (mcp)storing   val1,val2 =  undefined is storedat the start
//  step3: function (definition) ,, total = num1 + num2,return total;
// step4: result1 ,result2 = undefined 
// step5:(ec): now the vales (10,5),and (10,2) values are are passed to the val1,val2
// step6: now for function again a (GE + exection thread is made(again mcp and ec)as many times as execution of a function)(after execution of the function it gets destroyed)
// (mcp): val1=undefined
// (mcp):val2=undefined
// (mcp): total=undefined
// (ec) : num1=10=val1
// (ec) : num2=5=val2
// (ec) : total = 15 ==> returns to the step1(GE)  ,,results =15
//  for result2 same as from step6;
        






