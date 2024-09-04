//Immediately invoked Function Expressions(IIFE)

//sometime global scope pollution creates problem so we use IIFE
//; is required for mark end of first function

(function chai() {

    //named iife
    console.log(`DB connected`);
    
})();

((name) => {
    console.log(`DB conectd two ${name}`);
    
})('Lukesh');

// chai()



