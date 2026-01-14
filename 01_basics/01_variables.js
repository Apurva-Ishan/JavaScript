const accountId = 112233
let accountEmail = "appy@gmail.com"
var accountPassword = "0909"
accountCity = "Delhi"
let accountState;

// accountId = 23
accountEmail = "ishan@gmail.com"
accountPassword = "1212"
accountCity = "Goa"

/*
var is not preferred because of the issues with block scope and functional scope*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
