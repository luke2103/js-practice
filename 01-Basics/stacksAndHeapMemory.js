//Stack Memory(Primitive) , Heap Memory(Non -primitive)

let myYoutubeName = "Lukesh"


//Heap example
let user1 = {
    email: "lukesh",
    upi:"az@ybl"
}
let user2 = user1
user2.email = "hitesh"


console.log(user1);
console.log(user2);