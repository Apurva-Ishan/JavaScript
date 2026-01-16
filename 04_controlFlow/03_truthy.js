const userEmail = []

// if(userEmail) {
//     console.log("got user email");
    
// }else {
//     console.log("no user email");
    
// }

// falsy values
// false, 0, -0, 0n, null, undefined, NaN, "" <- empty string

// truthy values
// "0" <- not empty string, "false", " ", [] <- empty array,  {}, function(){} <- empty function

// if(userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
    
// }

// Nullish coalescing operator (??)
// LeftExpression ?? RightExpression => if Left is falsy, returns Right, else return Left

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // instead of 10, there is fn that fetches data
val1 == undefined ?? 15
console.log(val1);

// conditional (ternary) operator (?)
// condition ? true : false

const price = 100
price >= 80 ? console.log("More than 80") : console.log("less than 80");

