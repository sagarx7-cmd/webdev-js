const userEmail = []

//const userEmail = "hitesh@ai.com"

//Yaha string ko maan liya gya hai ki woh true value hai, isi ko truthy value kehte hai

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

//These are considered as false

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

//To check if array is empty or not :

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//To check if object is empty or not:
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //10 will be assigned
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //First 10 aaya hai, so it will assigned first



console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("sless than 80") : console.log("more than 80")