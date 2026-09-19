const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push existing array pe hi work karta hai

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//But, concat work ya return karta hai in new array

// Not used widely, for separation of array. Instead we use spread method


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

//The following example will be used rarely

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//.isArray is used to check whether a given varibale is array or not

console.log(Array.isArray("Hitesh"))

// .from is used to convert it into array

console.log(Array.from("Hitesh"))



console.log(Array.from({name: "hitesh"})) // interesting

// To convert multiple variables into array :

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));