// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5) {
//         console.log("found 5");
        
//     }
//     console.log(element);
    
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`Table of ${i}`);
//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(`i: ${i}`);    
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 5) {
//         console.log("detected 5");
//         continue
//     }
//     console.log(`i: ${i}`);    
// }


// while

// let i = 0
// while(i <= 10) {
//     console.log(`i: ${i}`);
//     i+=2
// }

// let myArr = [4, 7, 2, 6 , 1]
// let i = 0
// while(i < myArr.length) {
//     console.log(`array[${i}]: ${myArr[i]}`);
//     i++
// }

// do while

// let score = 12
// do {
//     console.log(`score: ${score}`);
//     score++
// } while(score <= 10)

// for of

// const arr = [1, 2, 3, 4, 5]

// for(const num of arr) {
//     console.log(`arr: ${num}`);
    
// }

// const greetings = "Hello World"

// for(const greet of greetings) {
//     if(greet == " ") {
//         console.log("char: space");
//         continue
//     }
//     console.log(`char: ${greet}`);
// }

// maps - unique values

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("JP", "Japan")

// console.log(map);

// for(const [key, value] of map) {
//     console.log(key, ":-", value);
// }

// const myObj = {
//     "game1": "Valorant",
//     "game2": "Fortnite"
// }


// objects are not iterable with for...of
// for(const key of myObj) {
//     console.log(key);
    
// }

// for objects

const myObject = {
    js: "javascipt",
    cpp: "c++",
    rb: "ruby",
    swift: "SWIFT"
}

// for(const key in myObject) {
//     console.log(`${key} is the shortcut for ${myObject[key]}`);
// }

const languages = ["js", "cpp", "java", "ruby", "python"]

// for(const key in languages) {
//     console.log(languages[key]);
    
// }

// for(const key in map) {
//     console.log(key);
    
// }


// for each

// languages.forEach((val) => {
//     console.log(val);    
// });

function printMe(item) {
    console.log(item);
    
}

// languages.forEach(printMe)

// languages.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myLanguages = [
    {
        languageName: "JavaScript",
        languageExtension: "js"
    },
    {
        languageName: "Python",
        languageExtension: "py"
    },
    {
        languageName: "Java",
        languageExtension: "java"
    }
]

// myLanguages.forEach((item) => {
//     console.log(item.languageExtension);
    
// })

// const val = languages.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(val); // undefined
