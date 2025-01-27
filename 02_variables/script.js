const accountId = 124252 //it's value cant be changed
let accountEmailId = "jaydip@gmail.com" //it have block level scope
var accountPassword = "12345" //we use var less as JS problem with scope as its global
accountCity = "Ahmedabad"
let accountState

/* so prefer not to use var
In js semicolon is not neccecity 
acccountState will be undefined if value not assinged*/

// accountId = 55
accountEmailId = "jaydip"
accountPassword = "222"
accountCity = "rajula"
// console.log(accountId)
console.table([accountId,accountEmailId,accountPassword,accountCity,accountState])
