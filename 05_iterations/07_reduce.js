const myNums = [1, 2, 3, 4,]

// const myTotal = myNums.reduce(function (acc, cuurval) {
//     console.log(`acc is : ${acc} and cuurval is ${cuurval}`);
    
//     return acc+cuurval
// }, 3)

const myTotal = myNums.reduce((acc, cuurval) => (acc + cuurval) ,0)

console.log(myTotal);

shoppingCart.reduce((acc, item)=>(acc+item.price),0)
