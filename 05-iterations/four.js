const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//Below loop is for in loop, it is applicable on object

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//Note - When we use for in loop for arrays, we get their index value as output

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

//Note - we can't use for in loop on map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }