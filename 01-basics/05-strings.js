// Avoid this way for string concatenation
const name = "sagar"
const repoCount = 50

// console.log(name + repoCount + " Value");

// Use this way for concatenation of string - it is more readible and mordernized.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// By using 2nd method to declare string, basically creating object of string class mujhe kayi properties mil jatti hai like length and functions/methods milte hai which are inside prototype.

const gameName = new String('hitesh-hc-com')



// console.log(gameName[0]);
// console.log(gameName.__proto__);

//Btw, jo following operations hai unhone gameName(variable) li original value ko change nhi kiya hai.

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// substring method me hum -ve value nhi pass kar sakte

const newString = gameName.substring(0, 4)
console.log(newString);

// Slice method me hum -ve value pass kar sakte hai - useful when we want to break the string from the reverse.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//trim method is used to remove extra spaces from the string

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace fucn is used to replace some words with the string.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', "-"))

//To check whether a character or a group of character belongs to the string, we can use includes method

console.log(url.includes('sundar'))

//To split the string in an array we use split method, based on the separator we are using. For ex '-' or whitespace

console.log(gameName.split('-'));

