// Immediately Invoked Function Expressions (IIFE)

//Two reasons for using iife:
//1.Function ko instantly run/exectute karna
//2.Global scope me jo variables hai unke pollution se bachana

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//Simple IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')