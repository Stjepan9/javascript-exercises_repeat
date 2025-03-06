const convertToCelsius = function(fahrenheit) {
  let convertToCelsius = (fahrenheit -32) * (5/9);
  return Number(convertToCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius){
  let convertToFahrenheit = (celsius * (9/5)) + 32;
  return Number(convertToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
