const score = 400;
console.log(score);
// output 400

const balance = new Number(400);
console.log(balance);
// [Number : 400]

// when run in the console of brouser 

// Number { 400 }
// [[Prototype]] : Number --> properties available following
// constructor :  ƒ Number()
// toExponential :  ƒ toExponential()
// toFixed :  ƒ toFixed()
// toLocaleString :  ƒ toLocaleString()
// toPrecision :  ƒ toPrecision()
// toString :  ƒ toString()
// valueOf :  ƒ valueOf()
// [[Prototype]] : Object
// [[PrimitiveValue]] : 0
// [[PrimitiveValue]] : 400

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //23.9, if the number was as 123.95375 the for this return 3 first only so as 124
//(method) Number.toPrecision(precision?: number): string
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
//@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(Number.MAX_VALUE);


//  ++++++++++++++++++++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

console.log(Math.abs(-4)) //4
// also have ceil, round, floor

console.log(Math.random());// gets in 0 and 1 between 
console.log(Math.random()*10);// gets in 0 and 1 between multiplied by 10 -- values shift left ca give 0.1
console.log(Math.random()*10 + 1);// min value will be 1, and 0 values avoided -- values can be from 1 to 9
console.log(Math.floor(Math.random()*10));

const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max-min + 1)) + min)
