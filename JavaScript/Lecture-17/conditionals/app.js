
// if else conditionals: they are used to execute a block of code based on a condition.
// Syntax:
// if(condition){
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }

// we can also use else if to check multiple conditions:
// if(condition1){
//     // code to be executed if condition1 is true
// } else if(condition2){
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both condition1 and condition2 are false
// }

// Nested if else: we can also use if else inside another if else block.
// syntax:
// if(condition1){
//     // code to be executed if condition1 is true
//     if(condition2){
//         // code to be executed if condition2 is true
//     } else {
//         // code to be executed if condition2 is false
//     }
// } else {
//     // code to be executed if condition1 is false
// }

// if is stand alone statement and it can be used without else. 
// But else and else if cannot be used without if.

// if and else if need condition to be evaluated but else does not need any condition.




// for running whole body of the if or else we need to use curly braces {}. 
// If we don't use curly braces then only the first statement after if or else 
// will be considered as part of that block.

// if(false)
//     console.log("hi bahut maeer ho tum");
//     console.log("hi baba boi");


// if(false){
//     console.log("hi bahut maeer ho tum");
//     console.log("hi baba boi");
// }




// let age=20;
// if(age<=18){
//     console.log("not allowed to enter club");
// }
// else if(age<=21){
//     console.log("allowed to enter club but you cannot drink");
// }
// else{
//     console.log("allowed to enter club and you can drink");
// }
 

// age=16;
// if(age<=21 && age>18){
//     console.log("allowed to enter club but you cannot drink");
// }
// else if(age<=18){ 
//     console.log("not allowed to enter club");
// }
// else{
//     console.log("allowed to enter club and you can drink");
// }


// input through prompt accepts input as string so we need to convert it to number using parseInt or Number function.

// let age=prompt("enter your age");
let age=parseInt(prompt("enter your age"));
if(age<=18){
    console.log("not allowed to enter club");
}
else if(age<=21){
    console.log("allowed to enter club but you cannot drink");
}
else{
    console.log("allowed to enter club and you can drink");
}