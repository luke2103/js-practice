
// var c= 300

let a=300
if (true) {
    
    let a  = 10;
    const b = 20;
    // console.log("inner: " ,a);


}

// console.log(a);
// console.log(b);



function one() {
    const username = "Lukesh"
    
    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    
    two();
    // console.log(website);
    
}

// one()


if (true) {
    const username = "Lukesh"
    if (username === "Lukesh") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++++++++++++ intersting +++++++++++++

console.log(addOne(5))
function addOne(value) {
    return value +1
}

addTwo(5)  //this will throw error
const addTwo = function (num) {
    return num+2
}



