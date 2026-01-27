const name = "Ishan"
const repoCount = 50

// console.log(name + repoCount + " Repositories") outdated syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Iron-Can-Master")

// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf("o"))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-3, -6)
// console.log(anotherString)

const anotherNewString = "   IronCan   "
// console.log(anotherNewString)
// console.log(anotherNewString.trim())

const url = "https://www.ironcan.com/Iron%20Cancer"
// console.log(url.replace("%20", "-"))
// console.log(url.includes("Can"))

console.log(gameName.split("-"))