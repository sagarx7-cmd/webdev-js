// array

// Arrays can store data elements of diff. datatypes in js

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//2nd way of declaring array in js ( By creating object of array class)

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6) // Inserts the element at the end of array
// myArr.push(7)
// myArr.pop() // Removes the last index element

// myArr.unshift(9) // Inserts the elemnts at the oth index 
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// In splice, mera end range bhi count hota hai but that's not the only difference. While using splice the orginal array value also gets changed


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
