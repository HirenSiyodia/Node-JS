const calc = require('./Hello'); // Importing the module using require and storing it in a variable named calc
const {sum, sub} = calc // Destructuring the sum and sub functions from the calc object for easier access
console.log('Hello Hiren'); // Logging a greeting message to the console

console.log(sum(3, 4)); // Calling the sum function with arguments 3 and 4 and logging the result to the console
console.log(sub(7, 2)); // Calling the sub function with arguments 7 and 2 and logging the result to the console
