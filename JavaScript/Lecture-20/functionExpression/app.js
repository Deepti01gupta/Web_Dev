

// function expression: when we assign a function to a variable, it is called function expression. 
// In function expression, the function can be anonymous or named. If the function is named, 
// then the name of the function is only accessible within the function itself.

let fun=function iphone(){
    console.log("I am an iphone");
}
fun();


// Question: whenever i store the entire function inside a variable then it is called:
// 1. function expression
// 2. fist class function
// 3. fist class citizen function
// 4. All of the above
// 5. None of the above
// Answer: 4. All of the above



// question: How are function run behind the scenes in JavaScript?
// ANSWER:
// whenever a js code is run a GE (Global Execution Context) is created and the code is executed line by line. 
// Whenever a function is called, a new execution context is created for that function and the code inside 
// the function is executed. Once the function execution is completed, the execution context is destroyed 
// and the control is returned to the global execution context. This process is known as function execution context.

// MCP: Memory Creation Phase
// MCP is the phase where memory is allocated for variables and functions before the code is executed. In this phase, 
// all the variables are initialized with undefined and all the functions are stored in memory.

// CEP: Code Execution Phase
// CEP is the phase where the code is executed line by line. In this phase, the values of variables are assigned 
// and the functions are executed. When a function is called, a new execution context is created for that function 
// and the code inside

// Callstack: Call stack is a data structure that is used to keep track of the execution context. It is a stack data structure 
// that follows the Last In First Out (LIFO) principle. Whenever a function is called, a new execution context is created and 
// pushed onto the call stack. When the function execution is completed, the execution context is popped from the call stack and 
// the control is returned to the previous execution context.

let x=500;
let y=200;
function sam() {
    let g=10;
    console.log(g);
}
console.log(y);
sam();
console.log(x);
