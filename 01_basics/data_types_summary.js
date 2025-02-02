// primitive
// call by value -- original wont given copy refernce will be changed

// 7 types : String, Number, Boolean, null, undefined, Symbol(to make values unique), BigInt

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)

const bigNumber = 163751486942986226983n //bigint

//reference type -- non primitive
// directlr refernce allocated

// Array, Objects, Functons

const hero = ['jd','khasiya']

let myObj = {
    name: 'jaydip',
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}


// *****************************************************

// stack(primitive) -- copy of value, Heap (Non Primitive) -- ref to original value

let name = "jaydip"

let new_name = name // copy given 

new_name = "jd"

console.log(name)
console.log(new_name)

// for heap -- direct ref given of og value , variable will be created in stack , same value will be created once stored and can give ref to many

let user = {
    email : "jaydip.com",
    upi: "t7457234"
}

let userTwo = user

userTwo.email = "jd.com" // original value will be changed

console.log(user)
console.log(userTwo)