
// Maths functions: 

// 1. Math.round() - Rounds a number to the nearest integer
// let num1 = 4.6;
// console.log(Math.round(num1)); // Output: 5
// let num1b = 4.3;
// console.log(Math.round(num1b)); // Output: 4

// 2. Math.ceil() - Rounds a number up to the next largest integer
// let num2 = 4.2;
// console.log(Math.ceil(num2)); // Output: 5

// 3. Math.floor() - Rounds a number down to the next smallest integer 
// let num3 = 4.8;
// console.log(Math.floor(num3)); // Output: 4

// 4. Math.max() - Returns the largest of zero or more numbers
// console.log(Math.max(3, 7, 2, 9)); // Output: 9 

// 5. Math.min() - Returns the smallest of zero or more numbers
// console.log(Math.min(3, 7, 2, 9)); // Output: 2

// 6. Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random()); // Output: A random number between 0 and 1

// 7. Math.pow() - Returns the base to the exponent power
// console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)

// 8. Math.sqrt() - Returns the square root of a number
// console.log(Math.sqrt(16)); // Output: 4 (square root of 16)

// 9. Math.abs() - Returns the absolute value of a number
// console.log(Math.abs(-5)); // Output: 5 (absolute value of -5)

// 10. Math.PI - Returns the value of PI
// console.log(Math.PI); // Output: 3.141592653589793 (value of PI)

// 11. Math.E - Returns the value of Euler's number
// console.log(Math.E); // Output: 2.718281828459045 (value of Euler's number)


// Using random number to generate a random integer between 1 and 10
// let randomInt = Math.floor(Math.random() * 10) + 1;
// console.log(randomInt); // Output: A random integer between 1 and 10

// generate a random number between 22 to 27
let randomNum = Math.floor(Math.random() * 6 +22);
console.log(randomNum); // Output: A random integer between 22 and 27

// generate a 4 digit random otp 
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log(otp); // Output: A random 4 digit OTP between 1000 and 9999

// generate a 6 digit random otp
let otp6 = Math.floor(Math.random() * 900000) + 100000;
console.log(otp6); // Output: A random 6 digit OTP between 100000 and 999999

// general formula to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}