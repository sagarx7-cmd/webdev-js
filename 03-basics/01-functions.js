// Function definition:

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() - Function Call

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


//Note: Return ke baad kuch bhi print or display nhi hota hai in a function

function loginUserMessage(username = "sam"){ //"sam" is default value of username, agar hum function me kuch bhi argument pass nhi karenge toh bhi hume sam hi return hoga
    if(!username){ //This is equivalent to username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//Functions part 2

// function calculateCartPrice(...num1){ //... is a rest operator here
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))
//This will return us an array of arguments

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

//How to pass objects in functions

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//Hum direct object bhi pass kar sakte hai in a function

handleObject({
    username: "sam",
    price: 399
})

// How to pass array in a function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

//Hum directly array bhi pass kar sakte hai in a function

console.log(returnSecondValue([200, 400, 500, 1000]));