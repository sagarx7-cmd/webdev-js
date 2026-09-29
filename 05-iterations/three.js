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


