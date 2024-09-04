const coding = ["js", "ruby", "java", "cpp", "swift"]

// coding.forEach(function (item) {
//         console.log(item);
        
// })


// coding.forEach((element)=> console.log(element))

function printMe(item) {
    // console.log(item)
}

// coding.forEach(printMe)  //just give refernece


coding.forEach((item , index ,arr) => {
    // console.log(item , index , arr);
    
})




const myCoding = [
    {
        languageName: "JavaScript",
        languageCode:"JS"

    }, {
        languageName: "Java",
        languageCode:"Java"
        
    }, {
        languageName: "Python",
        languageCode:"py"
        
    }
]

myCoding.forEach((item) => {
        console.log(item.languageCode + "  " + item.languageName);
        
})