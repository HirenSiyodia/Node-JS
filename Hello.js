const sum = (a, b) => { // Arrow function to calculate the sum of two numbers
    return a + b;
}

const sub = (a, b) => { // Arrow function to calculate the difference of two numbers
    return a - b;
}

module.exports = { // Exporting the sum and sub functions as an object using module.exports in variable declaration
    sum,
    sub
}
