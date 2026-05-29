const fs = require('fs');

// write a file synchronously
// fs.writeFileSync('./sample.txt', 'Hello Hiren') // Writing to a file synchronously, this will create the file if it doesn't exist and write the specified content to it. 
// If the file already exists, it will overwrite the existing content.
// fs.writeFileSync('./sample.txt', ' How are you ?', {flag:'a'}) // flag:'a' is used to append the content to the file instead of overwriting it

// write a file asynchronously
fs.writeFile('./sample.txt', 'Hello Ishita', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Data succesfully fetched');
    }
})

console.log('Level 1'); // Logging 'Level 1' to the console
const fileContent = fs.readFileSync('sample.txt', 'utf-8'); // Reading the content of 'sample.txt' synchronously and specifying the encoding as 'utf-8'
console.log(fileContent); // Logging the content of the file to the console

fs.readFile('./sample.txt', 'utf-8', (err, result) => { // Reading the content of 'sample.txt' asynchronously, specifying the encoding as 'utf-8', and 
// providing a callback function to handle the result
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})
console.log('Level 2'); // Logging 'Level 2' to the console

