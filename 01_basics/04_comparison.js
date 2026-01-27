// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// console.log("2" > 1) true
// console.log("02" > 1) true

//Relational operators coerce the datatype into conversion

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
/*
null is converted to 0
but in case of == it's an exception as it produces the output false
so in case of ==, null is not considered 0 and is only loosely equal to undefined (due to JS specifications)
*/

// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined < 0)
// always false

// ===  ->  strict check, checks the value as well as the datatype

console.log("2" === 2)