// arrays
const myArr = [1, 2, 3, 4, 5]
const myHeros = ["superman", "batman", "spiderman"]
const myArrTwo = new Array(9,8,7,6,5)

// console.log(myArr[2]);

// array methods
// myArr.push(6)
// myArr.push(7)

myArr.unshift(8) // adds specified elements to the beginning of the array and returns size of the array
myArr.shift() // removes the first element from the array and returns that element

// console.log(myArr);
// console.log(myArr.includes(0));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice and splice

// console.log("A", myArr);
myNewArray1 = myArr.slice(1,3)

// console.log(myNewArray1);
// console.log("B", myArr);

myNewArray2 = myArr.splice(1,3)
// console.log(myNewArray2);

// console.log("C", myArr);

// -----------------------------------------------------

const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_another_aray = another_array.flat(Infinity)

// console.log(new_another_aray);

// console.log(Array.isArray("Ishan"))
// console.log(Array.from("Ishan"))
// console.log(Array.from({name: "Ishan"})); // shows empty array because it gets confused which property should be made array: key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
