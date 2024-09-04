// const tinderUser = new Object(); //this is an singleton Object 
const tinderUser = {}   //this is not an Singleton Object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 
// console.log(tinderUser)

const regularUser = {
    email: "la@gmail.com",
    fullName : {
        userfullName: {
            firstName: "Lukesh",
            lastName:"Ankamwar"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstName);


const obj1 = {
    1: "a",
    2:"b"
    
}

const obj2 = {
    3: "c",
    4:"d"
    
}

// const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({} , obj1 , obj2)
// therfore use spread
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)


const users = [

    {
        id: 1,
        email:"h@gmail.co"
    },  
    {
        id: 2,
        email:"l@gmail.co"
    }
]

// console.log(users[0].id)


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedI'));



