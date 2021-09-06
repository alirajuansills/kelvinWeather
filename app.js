// The forecast
const kelvin = 293;
// Celsius conversion
let celsius = kelvin - 273;
// Fahrenheit equation
let fahrenheit = celsius * (9/5) + 32;
// Rounds down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`)