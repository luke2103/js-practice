const user={
    username:"Lukesh",
    price: 999,
    
    welcomeMessage: function () {
        console.log(`${this.username},Welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "hitesh"
//     // console.log(this);  //gives a lot of values
//     console.log(this.username);  //this will be undefined ,i.e this works inside objects but not inside function
    

    
// }

// chai()


// const chai = function () {
//      let username = "hitesh"
//     console.log(this.username);  //undefined
// }

// chai()


const chai = () =>{
     let username = "hitesh"
    console.log(this.username);  //undefined
}

// chai()


// const addTwo = (num1, num2) => { //if we add { } return statement is must
//     return num1+num2
// }


// const addTwo = (num1, num2) => num1+num2 //if we add { } return statement is must

// const addTwo = (num1, num2) => (num1 + num2)  w
 
 const addTwo = (num1, num2) => ({username:"hitesh"})  //here without ()  , object will come as undefined 



console.log(addTwo(4,5));





