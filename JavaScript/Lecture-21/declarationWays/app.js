


// Declaration Ways
// 1. var
// 2. let
// 3. const


// difference between var, let and const in tabular form

// | Feature            | var            | let            | const          |
// | -------------      | -------------  | -------------  | -------------  |
// | Scope              | Function scope | Block scope    | Block scope    |
// | Re-declaration     | Allowed        | Not allowed    | Not allowed    |
// | Re-assignment      | Allowed        | Allowed        | Not allowed    |
// | Hoisting           | Yes            | No             | No             |
// | Temporal Dead Zone | No             | Yes            | Yes            |


// const is used to declare a variable that cannot be reassigned after its initial assignment. 
// It is block-scoped, meaning it is only accessible within the block in which it is defined. 
// A const variable must be initialized at the time of declaration, and its value cannot be 
// changed later in the code.

// const x=10;
// console.log(x); // Output: 10

// const name="deepti";
// console.log(name);
// name="om"; // TypeError: Assignment to constant variable.
// console.log(name); 

// const x;
// x='sid';
// console.log(x); // SyntaxError: Missing initializer in const declaration



// let is used to declare a variable that can be reassigned after its initial assignment.
// It is block-scoped, meaning it is only accessible within the block in which it is defined. 
// A let variable can be declared without an initial value and can be reassigned later in the code.

// let x=10;
// console.log(x); // Output: 10

// let name="deepti";
// console.log(name); // Output: deepti
// name="om";
// console.log(name); // Output: om
// let name="omti";
// console.log(name); // SyntaxError: Identifier 'name' has already been declared



// var is used to declare a variable that can be reassigned after its initial assignment.
// It is function-scoped, meaning it is accessible within the function in which it is defined. 
// A var variable can be declared without an initial value and can be reassigned later in the code.

// var x=10;
// console.log(x); // Output: 10

// var name="deepti";
// console.log(name);
// name="om";
// console.log(name); // Output: om
// var name="omti";
// console.log(name); // Output: omti

