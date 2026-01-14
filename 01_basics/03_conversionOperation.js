let score = "abcsd"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// "33" -> 33
// "33ab" -> NaN
// true -> 1, false -> 0

let isLoggedIn = "no"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 -> true, 0 -> false
// "" -> false, "string" -> true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(someNumber)
// console.log(typeof stringNumber)

// -------------------Operations------------------------

let value = 3;
let negValue = -value;

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*3)
// console.log(2**3)
// console.log(3/2)
// console.log(3%2)

let str1 = "Hello"
let str2 = " Ishan"

let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true)
// console.log(true+) //error
// console.log(+"")

let gameCounter = 100
gameCounter++
console.log(gameCounter)

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"