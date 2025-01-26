const convertToCelsius = function(inputTempInFahrenheit) {
  // f to c
  // (32°F − 32) × 5/9 = 0°C
  let celsius = (inputTempInFahrenheit - 32) * (5 / 9);
  // rounding to 1 decimal place
  celsius = parseFloat((Math.round(celsius * 10) / 10).toFixed(1));
  return celsius;

};

const convertToFahrenheit = function(inputTempInCelsius) {
  // c to f
  // (0°C × 9/5) + 32 = 32°F
  let fahrenheit = (inputTempInCelsius * (9 / 5)) + 32;
  fahrenheit = parseFloat((Math.round(fahrenheit * 10) / 10).toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
