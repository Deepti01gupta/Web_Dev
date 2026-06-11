
// CALLBACK FUNCTION
// A function which is passed as an argument to another function is called a callback function. 
// The function which receives the callback function as an argument is called higher order function.
// We have to envoke the callback function in order to execute it then only it is called callback function.


function getBoolean(item) {
    return typeof(item) === 'boolean';
}
function getString(item) {
    return typeof(item) === 'string';
}
function getNumber(item) {
    return typeof(item) === 'number';
}

function check(item, fn) {
    return fn(item);
}

console.log(check(true, getBoolean)); // true
console.log(check("hello", getString)); // true
console.log(check(19, getString)); // false
console.log(check(19 , getNumber)); // true
