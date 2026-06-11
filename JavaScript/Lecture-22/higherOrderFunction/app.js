


// Higher Order Function
// Functions that can take other functions as arguments or return functions as 
// their result are called higher-order functions. They are a powerful tool in 
// JavaScript and allow for more flexible and reusable code.


// condition 1: A function can take another function as an argument
// function a(fun){
//     console.log("hi i am inside A");
//     fun();
// }
// function b(){
//     console.log("hi i am inside B");
// }
// a(b);
// Output:
// hi i am inside A
// hi i am inside B


// condition 2: A function can return another function as its result
// function a(){
//     console.log("inside A");
//     function b(){
//         console.log("inside B");
//     }

//     return b;
// }
// let x=a();
// console.log(x); // it will print the function definition of b
// x();   // inside A inside B



// REAL WORLD EXAMPLE
// function getBoolean(arr) {
//     let result=[];
//     for(let i=0; i<arr.length; i++){
//         if(typeof(arr[i]) === 'boolean'){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// function getString(arr) {
//     let result=[];
//     for(let i=0; i<arr.length; i++){
//         if(typeof(arr[i]) === 'string'){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// function getNumber(arr) {
//     let result=[];
//     for(let i=0; i<arr.length; i++){
//         if(typeof(arr[i]) === 'number'){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let arr=['sam','samarth', 10, 30, true, false];
// console.log(getBoolean(arr)); // [true, false]
// console.log(getString(arr)); // ['sam','samarth']
// console.log(getNumber(arr)); // [10, 30]




// OPTIMIZED CODE USING HIGHER ORDER FUNCTION

// function getBoolean(item) {
//     return typeof(item) === 'boolean';
// }
// function getString(item) {
//     return typeof(item) === 'string';
// }
// function getNumber(item) {
//     return typeof(item) === 'number';
// }

// function get(array, fn) {
//     let result=[];
//     for(let i=0; i<array.length; i++){
//         if(fn(array[i])){
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
// let arr=['sam','samarth', 10, 30, true, false];

// console.log(get(arr, getBoolean)); // [true, false]
// console.log(get(arr, getString)); // ['sam','samarth']
// console.log(get(arr, getNumber)); // [10, 30]



