const kelvin = 300; // set the temperature in kelvins, set it to const so it can't be changed inside the code
var celsius = kelvin -273; // this line will subtract the correct value from kelvin to get celsius degrees
var fahrenheit = celsius * (9/5) +32; // this formula gets us the fahrenheit degrees from celsius
fahrenheit = Math.floor(fahrenheit); // this line will round down the fahrenheit temperature to the nearest whole number
var newton = celsius * (33/100); // this gives us the temperature in newton scale
newton = Math.floor(newton); // this line will round down the newton temperature

console.log(`The temp in Celsius degrees is ${celsius}. `); //this will print the message and temperature to console
console.log(`The temp in Fahrenheit degrees is ${fahrenheit}. `); //this will print the message and temperature to console
console.log(`The temp in Newton degrees is ${newton}. `); //this will print the message and temperature to console
