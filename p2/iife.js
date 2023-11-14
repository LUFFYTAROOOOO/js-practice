// immediately invoked the function expression (IIFE)

  // named iife
( function ayush(){
    console.log(`hi there`);
} )();  // ifwe don't put the semicolon error will arise

// ayush()

(function panchal(){
    console.log(`nice to meet you`);
})();


// un-named iife
( () => {
    console.log(`bye`);
} )();


// passing the parameter here 
//  @name => is the defining parent
( (name) => {
    console.log(`welcome back ${name}`);
} )(`ayush`);  // @`ayush` here is the parameter inside the formal parameter bracket(receiver)













