let a = 300

if(true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("Inner a:", a);
}

// console.log("Outer a:", a);
// console.log(b);
// console.log(c);

// ---------------------------------------------

function one() {
    const username = "Ishan"

    function two() {
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website); website is not in the scope of one().

    two()
}

// one()

if(true) {
    const username = "Ishan"
    if(username === "Ishan") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// -------------------INTERESTING-------------------------

// console.log(addOne(5)); // executes without error
function addOne(num) {
    return num + 1
}

// console.log(addOne(5));

// console.log(addTwo(3)); // throws an error
const addTwo = function(num) {
    return num + 2
}
// console.log(addTwo(3));
// READ HOISTING

// -------------------------------------------

