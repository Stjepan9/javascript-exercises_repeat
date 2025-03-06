const sumAll = function(number1, number2) {


    if(number1 < 0 || number2 < 0) return "ERROR";
    if(!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";


    let min = Math.min(number1, number2);
    let max = Math.max(number1, number2);

    let result = 0;
    for(let i = min; i <= max; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
