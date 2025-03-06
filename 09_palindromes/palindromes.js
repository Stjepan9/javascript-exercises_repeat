const palindromes = function (input) {

    let characters = "qwertzuiopasdfghjklyxcvbnm1234567890"

    let normalString = input.toLowerCase().split(``).filter((element)=> characters.includes(element)).join(``);
    let reverseString = normalString.split(``).reverse().join(``);

    return normalString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
