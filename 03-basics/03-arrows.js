// iss scope ke andar jitne bhi variables/keys hai, unko access karne ke liye mai this keyword ka use karunga

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); This will give us an empty object {}

// If we execute line 18 on browser console we will get window object (global object)

//ye jo mera context hai(this keyword) ise mai sirf object me use kar sakta hoon not in functions

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// Arrow Function - function keyword hatana hai and parenthesis ke baad arrow lagana hai, that's it

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

//Basic Arrow Function:

//Explicit return arrow function : Basically jab hum return keyword use karte hai

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

//Implicit Return arrow function:
//Agar round brackets use kar rhe hai toh no need to write return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )

//The below code will return us an object

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))