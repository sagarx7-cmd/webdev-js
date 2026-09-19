//There are two ways to declare objects:
// 1. By literals 2. By constructors

//Remember (for interview purposes) : If we declare object by literals - then singleton is not formed

//Object Literals


const mySym = Symbol("key1")

//To use symbol as a key - use [] brackets

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//We can access object elements by key

// console.log(JsUser.email) //Not a good way for accessing object element

// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//How to change object value:
JsUser.email = "hitesh@chatgpt.com"

//.freeze() is used to freeze or lock the object so no chnages can be made to it.
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//We can also add function in key (explained below)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());