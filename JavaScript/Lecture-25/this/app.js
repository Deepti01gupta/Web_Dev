

// this keyword
// this keyword refers to the current object that is being created by the constructor function or class constructor.
// this kisko point kar raha hai ye decide hoga aapki function calling/invokation se.

// TYPES:
// 1. regural function invocation: 

// function fun(){
//     console.log(this);
// }
// fun();
// in this case "this" will point to the global object (window in browser, global in nodejs) because fun is called as a regular function.



// 2. method invocation:

// let obj = {
//     number:2,
//     fn:function (){
//         console.log(this);
//     }
// }
// let myfun=obj.fn(); // {number: 2, fn: ƒ}
// console.log(myfun);

// question:
// let obj = {
//     number:2,
//     fn:function (){
//         console.log(this);
//     }
// }
// let myfun=obj.fn;
// myfun(); // window object

// let obj2 = {
//     fn:function (){
//         function cal(){
//             console.log(this);
//         }
//         cal(); // regural calling
//     }
// }
// obj2.fn(); // window object



// 3. constructor invocation:
// this will only point to the newly created object when the function is called with the "new" keyword. 
// It will not point to the global object.

// function Create(){
//     this.x=20;
// }
// let p=new Create();
// console.log(p); // Create {x: 20}
// console.log(p.x); // 20



// 4. indirect invocation: call, apply, bind

// call(): jab bhi tum call() method ka istemal kr rhe hote ho tab jo app call ke ander 
// mention krte ho apka this usse point krta hai.

// let obj={
//     a:20,
//     fn:function(a,b,c){
//         console.log(this, a, b, c);
//     }
// }
// let obj2={
//     a:50
// }
// let obj3={
//     name:"deepti"
// }

// // obj.fn(); // {a: 20, fn: ƒ}
// // obj2.fn(); // TypeError: obj2.fn is not a function

// obj.fn.call(obj2); // {a: 50} - call method allows us to call a function with a specified "this" value and arguments provided individually.

// obj.fn.call(obj3, 1, 2, 3); // {name: 'deepti'} 1 2 3 - call method allows us to call a function with a specified "this" value and arguments provided individually.

// obj.fn.call(obj,1,2,3); // {a: 20, fn: ƒ} 1 2 3 - call method allows us to call a function with a specified "this" value and arguments provided individually.

// obj.fn.apply(obj,1,2,3); // TypeError: CreateListFromArrayLike called on non-object - apply method allows us to call a function with a specified "this" value and arguments provided as an array (or an array-like object).

// obj.fn.apply(obj,[1,2,3]); // {a: 20, fn: ƒ} 1 2 3 - apply method allows us to call a function with a specified "this" value and arguments provided as an array (or an array-like object).


// let obj3 = {
//     Number: 20,
//     fn: function(){
//         console.log(this);
//     }
// }
// obj3.fn(); // {fn: ƒ} - method invocation, "this" points to obj3
// let x=obj3.fn.bind(obj3);
// x(); // {fn: ƒ} - bound function invocation, "this" points to obj3



// 5. arrow function invocation:

// let x = fn(()=>{
//     console.log(this);
// });
// console.log(x);
