const marvel_heros = ["thor", "IronMan"]

const dc = ["superman", "batman"]

// marvel_heros.push(dc);

// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc)
// console.log(allheros);


const allheros = [...marvel_heros, ...dc] //... it's called spread operator
console.log(allheros);


const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_Array = another_Array.flat(Infinity);

console.log(real_another_Array);


console.log(Array.isArray("Lukesh")); //chcks if it's an array

console.log(Array.from("Lukesh"));  //converts into array


console.log(Array.from({ name: "Lukesh" }));  //interesting , gives an []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





