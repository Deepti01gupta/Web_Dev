

// async-await: 
// async-await is a modern way to handle asynchronous operations in JavaScript. 
// It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.
// The async keyword is used to declare a function as asynchronous. This means that the function 
// will always return a promise, and you can use the await keyword inside it to pause the execution 
// of the function until a promise is resolved or rejected.
// The async always works with await. The await keyword can only be used inside an async function. 
// It is used to wait for a promise to resolve or reject before continuing with the execution of the code.

// function some(){
// }
// console.log(some());


// let p1=new function(){
// }
// console.log(p1);


async function some(){
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 sec ho gaye");
            resolve();
        },3000);
    });

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2 sec ho gaye");
            resolve();
        },2000);
    });

    console.log("dono promises complete ho gaye");
}
some();
// console.log(some());


