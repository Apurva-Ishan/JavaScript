// singleton
// Object.create(null);

// object literals

const mySym = Symbol("key1")

const user = {
    "name": "Ishan",
    "age": 22,
    [mySym]: "myKeyName",
    "location": "Delhi",
    "email": "ishan@gmail.com",
    "isLoggedIn": false,
    "lastLoginDays": ["Monday", "Saturday"]
}

// console.log(user.name)
// console.log(user["name"]); //this is preferred

// console.log(typeof user[mySym]);
// console.log(user[mySym]);

user.email = "appy@gmail.com"
// console.log(user.email)

// Object.freeze(user)

user.email = "apurva@gmail.com"
// console.log(user);

user.greetings = function() {
    console.log(`Hello User ${this.name}`);
    
}

// console.log(user.greetings());



// ------------------------------------------------

// const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Maria"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regualarUser = {
    email: "abcd@gmail.com",
    fullName: {
        firstname: "Maria",
        lastnName: "Sharapova"
    }
}

// console.log(regualarUser.fullName.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) // first parameter is the target and the following are the sources, so the first parameter will be modiefied
// const obj3 = Object.assign({}, obj1, obj2) // that's why we use this
// const obj3 = Object.assign(obj3, obj1, obj2) // or this

const obj3 = {...obj1, ...obj2}
// console.log(obj1);

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "b@google.com"
    },
    {
        id: 3,
        email: "c@google.com"
    },
    {
        id: 4,
        email: "d@google.com"
    }
]

// console.log(users[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("Maria"));
// hasOwnProperty() checks if the specified key exists or not

// ------------------------------------------------------------

const course = {
    courseName: "JavaScript",
    coursePrice: 49,
    courseInstructor: "Chai"
}

// const {courseInstructo} = course
const {courseInstructor: teacher} = course

// console.log(courseInstructor);
console.log(teacher);

// json format 
// {
//     "name": "Bazooka",
//     "age": 18,
//     "complexion": "Brown"
// }

