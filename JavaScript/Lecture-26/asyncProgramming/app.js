
// JavaScript is 
// weakly typed language: we can change the type of a variable at runtime
// dynamically typed language: we don't have to declare the type of a variable
// single-threaded: runs on a single thread, which means it can only execute one piece of code at a time
// asynchronous: can perform asynchronous operations, which allows it to handle tasks that take time to complete without blocking the main thread

// Asynchronous programming in JavaScript can be achieved using callbacks, promises, and async/await.

// setTimeout is a built-in function that allows us to execute a piece of code after a specified delay
// This method is present in the browser and in Node.js, and it is used to schedule a function to be 
// executed after a certain amount of time has passed
// It accepts two parameters: the first is the function to be executed, and the second is the delay in milliseconds


// console.log("Hello");
// setTimeout(() => {
//     console.log("This is a message from setTimeout");
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log("end");


// call stack: a stack data structure that keeps track of the function calls in the program
// callback queue: a queue that holds the callbacks that are ready to be executed after the main thread is free
// event loop: a mechanism that continuously checks the call stack and the callback queue,
// and executes the callbacks in the callback queue when the call stack is empty

// setInterval is a built-in function that allows us to execute a piece of code repeatedly at specified intervals 

// Browser Methods: 
// Location, localStorage, Setinterval, settimeout, console, url
// All these methods are called web APIs, which are provided by the browser 
// to allow us to interact with the browser and perform various tasks



// question 1: 
// console.log("start");

// setTimeout(() => {
//     console.log("after 2 seconds");
// }, 2000);

// setTimeout(() => {
//     console.log("after 4 seconds");
// }, 4000);

// console.log("end");

// output: 
// start 
// end
// after 2 seconds
// after 4 seconds


// question 2:
// console.log("start");

// setTimeout(() => {
//     console.log("after 4 seconds");
// }, 4000);

// setTimeout(() => {
//     console.log("after 2 seconds");
// }, 2000);

// console.log("end");

// output: 
// start 
// end
// after 2 seconds
// after 4 seconds


// question 3:
console.log("start");

setTimeout(() => {
    console.log("after 0 seconds");
}, 0);

console.log("end");

// output:
// start
// end
// after 0 seconds