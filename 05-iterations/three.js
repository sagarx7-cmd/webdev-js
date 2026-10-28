// for of
//This loop is Mainly used for Arrays and Objects

//Syntax

// for (const element of object) {
    //Element is basically an iterator
    //Yaha object matlab ki aapko kis pe loop lagana hai, it can be an array, a string as well
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = ["one", 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//for of string example

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//Maps

//Isme basically koi bhi dupicate values hoti nhi hai
//It holds key-value pairs similar to object, we have studied earlier

//Aur jis order me hum values set karte hai, the order stays the same

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

//Below example shows how we use for of loop in map

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//Note : for of loop is not applicable on object

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


