

// function in javascript

// function are heart of javascript
// syntax: 
// function functionName(parameters){
//     // function body
// }

// function declaration
// function sum() {
//     let num1 = 10;
//     let num2 = 20;
//     console.log(num1 + num2);
// }

// // calling the function
// sum();
// console.log(sum()); // undefined, because the function does not return anything, it only logs the result to the console

// function is defined once and can be called multiple times

// function with parameters
// parameters are the values that we pass to the function when we call it
// syntax:
// function functionName(parameters){
//     // function body
// }

// function triple(num3) {
//     let num1=10;
//     let num2=20;
//     console.log(num1 + num2 + num3);
// }
// triple(100);
// triple(45);
// triple(78);



// function with return statement
// return statement is used to return a value from the function
// syntax:
// function functionName(parameters){
//     // function body
//     return value;
// }

// function sum2() {
//     let num1 = 10;
//     let num2 = 20;
//     return num1 + num2;
// }
// console.log(sum2()) ; // 30



// function with parameters and return statement

// function sam1(num1, num2){
//     return num1+num2;
// }
// console.log(sam1(30, 40)); // 70
// console.log(sam1(100)); // NaN, because the second parameter is undefined, and adding a number to undefined results in NaN


// function sam2(num1, num2){
//     console.log(num1);
//     console.log(num2);
// }
// console.log(sam2(30, 40)); // 30, 40, undefined: undefined, because the function does not return anything, it only logs the parameters to the console
// console.log(sam2(100)); // 100, undefined ,undefined: because only one argument is provided



// default parameterised function
// function sam3(num1, num2=50){ // num2 is assigned a default value of 50
//     console.log(num1);
//     console.log(num2);
// }
// console.log(sam3(30, 40)); // 30, 40, undefined: undefined, because the function does not return anything, it only logs the parameters to the console
// console.log(sam3(100)); // 100, 50, undefined: undefined, because the function does not return anything, it only logs the parameters to the console



   