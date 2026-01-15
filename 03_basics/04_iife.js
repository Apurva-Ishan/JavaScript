// Immediately Invoked Function Expressions (IIFE)

(function chai() { // named iffe
    console.log(`DB CONNECTED`);    
})();

// chaiTwo will throw an error if the above function doesn't end with ;
// this is done to stop the context

// unnamed iffe
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Ishan")