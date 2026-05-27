

// Hoisting in javascript
// hoisting is a behavior in javascript where variable and function declarations 
// are moved to the top of their scope before code execution. This means that you 
// can use variables and functions before they are declared in the code.
// let, var and const are all hoisted but they are initialized differently.

// var a=20;
// function merafun(){
//     console.log("inside mera function");
// }
// console.log(a); // 20
// merafun(); `// inside mera function


// console.log(a); // undefined
// merafun();  // inside mera function
// function merafun(){
//     console.log("inside mera function");
// }
// var a=20;



//  QUESTIONS:

// input
// var a=10;
// sam();
// function sam(){
//     console.log(a);
//     console.log("inner function");
// }
// console.log(a);

// output:
// 10
// inner function
// 10


// input
console.log(a);
sam();
function sam(){
    console.log(a);
    console.log("inner function");
}
let a=10;

// output:
// ReferenceError: Cannot access 'a' before initialization,
// This error occurs because 'let' and 'const' declarations are not hoisted in the same way as 'var'.
// They are hoisted but not initialized, which means that they cannot be accessed before their declaration in the code. 
// In this case, when the code tries to access 'a' before it is declared, it throws a ReferenceError.
// Dead Temporal Zone (TDZ) is the time between the start of the block and the point where the variable is declared.

