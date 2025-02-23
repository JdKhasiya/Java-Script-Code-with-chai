// Dates

let myDate  = new Date();

console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //objcet


// let myCretedDate = new Date(2023, 0,23) // month as 0 starts january
// console.log(myCretedDate.toString());
// let myCretedDate = new Date(2023, 0,23, 5,3) //gives the time as 5:03:00 am
// console.log(myCreatedDate.toLocalString());

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() +1);

newDate.toLocaleString('default',{
    weekday: "long"
})//interniliation, and object how i want, to cutomize more the date to locales





     


