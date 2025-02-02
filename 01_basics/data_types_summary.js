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


