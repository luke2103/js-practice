//singleton
// Object.create    //using this singleton is created


const mySym = Symbol("key1")

//object literals
const userJs = {
    name: "Lukesh",
    "full Name": "Lukesh Ankamwar",
    [mySym] : "myKey1",
    age: 25,
    location: "Jaipur",
    email: "la@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday" , "Saturday"]
} 

// console.log(userJs.email);
// console.log(userJs["email"])
// console.log(userJs["full Name"])
// console.log(userJs[mySym])
// console.log(typeof mySym)




userJs.email = "lna@chatgpt.com"

// Object.freeze(userJs)

userJs.email - "la@microsoft.com"

console.log(userJs);

userJs.greeting = function () {
    console.log("Hello JS User")
}
userJs.greetingTwo = function () {
    console.log(`Hello JS User ,${this.name}`)
}

// console.log(userJs.greeting())
// console.log(userJs.greeting)

console.log(userJs.greeting())
console.log(userJs.greetingTwo())


