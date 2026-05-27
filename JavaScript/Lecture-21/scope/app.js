


// SCOPE: 
// Scope refers to the accessibility of variables and functions in different parts of a program.
// In JavaScript, there are three types of scope: global scope, function scope, and block scope.
// 1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// 2. Function Scope (var): Variables declared within a function are in the function scope and can only be accessed within that function.
// 3. Block Scope (let, const): Variables declared within a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.

// Scope = local memory + lexical environment of parent (local memory of parent + lexical environment of parent of parent and so on...)

var b=10;
function fun(){
    console.log(b);
}
fun();
// output:
// 10