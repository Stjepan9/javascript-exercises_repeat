const findTheOldest = function(array) {

let Oldest = array.reduce(oldest, currentPerson)=>{

let birthYear = currentPerson.yearOfBirth;
let deathYear = currentPerson.yearOfDeath || new Date().getFullYear();


let age = deathYear - birthYear;

}
};

// Do not edit below this line
module.exports = findTheOldest;
