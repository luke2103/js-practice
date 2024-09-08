const promise1 = new Promise(function (resolve , reject) {
    //Do an async task
    //DB calls . cryptography , network

    setTimeout(function () {
        console.log('Asunc task is complete');
        resolve()
        
    },1000)
})

promise1.then(function () {
    console.log("Prmoise consumed");
    
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async 2 is completed");
        resolve()
    })
}).then(function () {
    console.log("Async2 is  consumed");
    
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "chai",
            email:"chai@example.com"
        })
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
    
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({
            username: "chai",
            email:"chai@example.com"
            })    
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);    
}).catch((error) => {
    console.log(error);
    
})


const promiseFive = new Promise((resolve,reject) => {
        setTimeout(function () {
        let error = true
        if (!error) {
            resolve({
            username: "javascript",
            password:"124"
            })    
        } else {
            reject('ERROR: Something Js went wrong')
        }
    },1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive();



// async function getAllUsers() {
//    const response =await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await  response.json()
//     console.log(data);
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        console.log(data);
        
    })
    .catch((error) => console.log(error))