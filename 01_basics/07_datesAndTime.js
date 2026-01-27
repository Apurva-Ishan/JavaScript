let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let newDate = new Date(2023, 0, 23)
// let newDate = new Date(2023, 0, 23, 5, 3, 12)
// let newDate = new Date("2026-01-14")
// let newDate = new Date("01-14-2026")
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime())
// console.log(Date.now()/1000)

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());

// console.log(`Today is ${newDate.getDate()}th and the time is ${newDate.toLocaleTimeString()}`);

console.log(newDate.toLocaleString("default", {
    weekday: "long",
    // timeZone: 
}))