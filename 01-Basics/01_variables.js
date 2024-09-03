const accountId = 144533; //Value is fixed can't be changed now
let accountEmail = "lukesh@gmail.com"  //THIS SOLVED THE PRoblem of scope , earlier js  var had problem with scope of variable hence let was 
var accountPassword = "12345"  //introduced
accountCity = "Japan"
let accountState

// accountId = 2 //this will throw error as reassignment of const is not allowed


accountEmail = "lc@gmil.com"
accountPassword = "2121"
accountCity = "bengaluru"

console.log(accountId); 

/*
Prefer not to use Var because of issue
    in block scope and functional scope
*/
console.table([accountId , accountEmail ,accountPassword,accountCity,accountState])