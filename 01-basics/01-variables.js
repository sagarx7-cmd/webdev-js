const accountId = 14453
let accountEmail = "sagar@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 32 // not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope
and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])