
// OPERATORS:

// 1. Arithmetic Operators: +, -, *, /, %, **

// 2. Assignment Operators: =, +=, -=, *=, /=, %=

// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

// 4. Logical Operators: &&, ||, !

// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>

// 6. Ternary Operator: condition ? expression1 : expression2
  
let ans=10;

// if(ans>=5){
//     console.log("hi");
// }

// if(ans>=5 && naam){
//     console.log("hi");
// }

// let naam;
// if(ans>=5 && naam){
//     console.log("hi");   // no output because naam is undefined and it is falsy value so the condition will be false
// }


let naam;
if(ans>=5 || naam){
    console.log("hi");  // output will be hi because in OR operator if one condition is true then the whole condition will be true so it will print hi
}