// console.log(2>1)
// console.log(2>=1)

// console.log("2" > 1) // mostly try too compare two same type of datatypes
// console.log("02" > 1) //it might give unpredictable results

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // true, should not be it

// here comparision convers null to 0 so in >= true and > 0 is false

console.log(undefined == 0) // all false

// === , checks value and datatype

console.log("2" == 2) //true
console.log("2" === 2) //false 