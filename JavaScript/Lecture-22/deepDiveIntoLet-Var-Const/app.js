

// {...} are called block and it creates a new scope
// var is function scoped and let and const are block scoped


// GEC on initialisation : (i) let and const = script scope (ii) var = global scope


// console.log("hi i am free");
// {
//     console.log('hi i am block');
    
// }


// let score=50;
// if(score>33){
//     let x=20;
// }
// console.log(x); // x is not defined because it is block scoped


// let x=10;
// {
//     let x=20;
//     console.log(x); // 20
// }
// console.log(x); // 10


// let x=10;
// {
//     console.log(x); // 10
// }
// console.log(x); // 10


// var a=100;
// function fun(){
//     var a=50;
//     console.log(a); // 50
// }
// fun();
// console.log(a); // 100


// hoisting of var, let and const and TDZ (Temporal Dead Zone)
// console.log(a); // undefined
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// var a=10;
// let b=20;
// const c=30;