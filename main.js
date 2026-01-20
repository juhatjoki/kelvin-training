// set the temperature in kelvins, set it to const so it can't be changed inside the code
const kelvin = 300; 

// this line will subtract the correct value from kelvin to get celsius degrees
var celsius = kelvin -273; 

// this formula gets us the fahrenheit degrees from celsius, and round it down the fahrenheit temperature to the nearest whole number
var fahrenheit = celsius * (9/5) +32; 
fahrenheit = Math.floor(fahrenheit); 

// this gives us the temperature in newton scale and round it down to a whole number
var newton = celsius * (33/100); 
newton = Math.floor(newton); 

// print results to console
console.log(`The temp in Celsius degrees is ${celsius}.`); 
console.log(`The temp in Fahrenheit degrees is ${fahrenheit}.`); 
console.log(`The temp in Newton degrees is ${newton}.`); 
