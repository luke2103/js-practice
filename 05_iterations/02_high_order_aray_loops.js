//for of

const arr = [1, 2, 3, 4, 5, 6]

for (const element of arr) {
    // console.log(element);
    
}


//Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key + " :- " + value);
    
}


const myObject = {
    game1: 'NFS',
    game2 : 'SpiderMan'
}

for (const [key, value] of myObject) {
    console.log(key , " :- " , values);         //Objects are not iterables
    
    
}

