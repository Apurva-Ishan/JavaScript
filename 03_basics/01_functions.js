function addTwoNumbers(num1, num2) {
    return num1 + num2
}

// console.log(addTwoNumbers(3,4));

function userLoginMsg(username) {
    if(!username) {
        console.log("Please enter a username.");
        return
    }
    else {
        return  `${username} is logged in.`
    }
}

// console.log(userLoginMsg());

function calulateCartPrice(...num1) {
    return num1
}

// console.log(calulateCartPrice(200, 300, 400))

const user = {
    username: "Ishan",
    price: 200
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));