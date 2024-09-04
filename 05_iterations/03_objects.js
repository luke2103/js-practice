
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: "ruby",
    swift:"swift by Apple"
}

for (const key in myObject) {
    //   console.log(key);
      console.log(`${key} shortcut is for ${myObject[key]}`);
      
}


const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")

for (const key in map) {
    console.log(key);  //does not return anything
    
}