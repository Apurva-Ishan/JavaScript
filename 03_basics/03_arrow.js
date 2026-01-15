const user = {
    username: "Ishan",
    price: 999,

    welcomeMsg: function() {
        console.log(`Welcome, ${this.username}`);
        
    }
}

// user.welcomeMsg()
// user.username = "Appy"
// user.welcomeMsg()

// console.log(this);

function chai() {
    // let username = "Ishan"
    console.log(this.username);
    
}

// chai()

const coffee = function() {
    let username = "Ishan"
    console.log(this.username);
}

// coffee()

const choffee = () => {
    let username = "Ishan"
    console.log(this.username);   
    console.log(this);
    
}

// choffee()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// const addTwo = (num1, num2) => num1 + num2 // implicit return

console.log(addTwo(3,4));

