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