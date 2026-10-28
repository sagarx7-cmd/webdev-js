//for each loop is the one that will be mostly used

const coding = ["js", "ruby", "java", "python", "cpp"]

//Note callback function ka name nhi hota

// coding.forEach( function (val or item){
//     console.log(val);
// } )

//for each in arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

//Printme ko hum as a parameter pass kar sakte hai i n for each

// coding.forEach(printMe)

//for each method ke paas sirf 1 parameter (item) ka sirf access nhi hota, it also has index and arr (complete array)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//Below example is an important concept, it is basically showing how we apply for each loop in an array of objects.

//It is important because that's how we get values/data from the database

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )