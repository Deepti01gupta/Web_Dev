// typeof is a unary operator in JavaScript that returns a string indicating the type of the operand. 
// It can be used to determine the type of a variable or an expression.

console.log(typeof(1)); // "number"
console.log(typeof("hello")); // "string"
console.log(typeof(true)); // "boolean"
console.log(typeof(undefined)); // "undefined"
console.log(typeof(null)); // "object"
console.log(typeof({})); // "object"
console.log(typeof([])); // "object"
console.log(typeof(function(){})); // "function"
console.log(typeof(NaN)); // "number", because NaN is considered a special numeric value in JavaScript

console.log(typeof(0/10)); // "number", because 0 divided by any non-zero number is 0, which is a valid number
console.log(typeof(10/0)); // "number", because 10 divided by 0 results in Infinity, which is also considered a number in JavaScript
console.log(typeof(0/0)); // "number", because 0 divided by 0 results in NaN, which is also considered a number in JavaScript