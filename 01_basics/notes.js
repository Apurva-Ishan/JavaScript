// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

/*
Javascript is a dynamically typed language
i.e. no need to explicitly declare the datatype of a variable
the type of a variable can change during the execution
*/

const score = 4
const scoreVal = 5.4

const isLoggedIn = false
const tempOutsied = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 123456789123456789n // BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Superman", "Batman", "Spiderman"] // array

// object
let myObj = {
    myName: "Ishan",
    age: 22
}

const myFunction = function() {
    // console.log([myObj, heros])
}

//console.log(typeof heros)

myFunction()