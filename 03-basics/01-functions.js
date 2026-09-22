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