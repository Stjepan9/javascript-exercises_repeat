const fibonacci = function(n) {
    

    if(n == 0) return 0;
    if( n < 0 ) return "OOPS";
    if( typeof n !== "number") return Number(n);


        let firstNumber = 0;
        let secondNumber = 1;
        let thirdNumber;

    for(let i = 1; i < n; i ++){

        thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }

    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
