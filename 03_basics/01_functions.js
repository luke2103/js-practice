function sayMyName() {
    console.log("L")
    console.log("U")
    console.log("K")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName()


// function add2Numbers(number1, number2) {
//     console.log(number1 + number2);
    
// }


function add2Numbers(number1, number2) {
    // let result = number1 + number2
    return  number1 + number2
}

const result = add2Numbers(3, 4)
// console.log("Result: " , result);

function loginUserMessage(username="sam") {

    if (!username) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Lukesh"))
// console.log(loginUserMessage())

//...num1 here is rest operator

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "hitesh",
    price:199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
