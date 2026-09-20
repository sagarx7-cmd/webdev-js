//By constructor:

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//We can combine two or more objects by using assign function

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({},obj1, obj2, obj4)

// We used empty object on the line above, because it will be trated as target, and the obj1, 2 and 4 are treated as source. So, basically values of obj 1, 2 and 4 will be stored/assigned in the empty object

//We will use this method more for combination of objects

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//The below code shows how we get data/values from database

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

//console.log(tinderUser);
//console.log(Object.keys(tinderUser)); //This will return us an array of keys

// console.log(Object.entries(tinderUser)); Not used much

//Used to check wheteher a key is present in object or not (Can be used instead of loop)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
