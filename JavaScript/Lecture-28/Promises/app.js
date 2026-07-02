

// PROMISES:
// use to tackle the problem of callback hell and to handle asynchronous operations in a more manageable way.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// new Promise() se promise the constructor function hai jo ek promise object create karta hai. or ek promise return krta hai
// It always accepts a function, which is immediately executed when the promise is created. 
// This function takes two parameters: resolve and reject, which are functions used to settle the promise.


// A promise is in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// .then() method is used to handle the resolved value of the promise. 
// It takes a callback function as an argument, which is executed when the promise is fulfilled. 
// The resolved value is passed as an argument to this callback function.

// .catch() method is used to handle the rejected value of the promise.


// let promise=new Promise(function(resolve,reject){
//     setTimeout(function () {
//         // let data='hi dosto ye promise hai';
//         // resolve(data);

//         // let err='opps kuch galat ho gaya';
//         // reject(err);

//         resolve('hi resolve');
//         reject('hi reject');

//     }, 3000);
// });

// promise.then(function(data){
//     console.log(data);
// });

// promise.catch(function(err){
//     console.log(err);
// });
 
 

// let p1=new Promise((resolve, reject)=>{
//     console.log('3 sec k wait kro ');
//     setTimeout(() => {
//         // resolve();
//         reject();
//     }, 3000);
// });
// p1.then(()=>{
//     console.log('3 sec ho gaye');
// }).catch(()=>{
//     console.log('kuch galat ho gya');
// });



let p1=new Promise((resolve, reject)=>{
    console.log('3 sec k wait kro ');
    setTimeout(() => {
        resolve();
        // reject();
    }, 3000);
});

p1.then(()=>{
    return new Promise((resolve, reject)=>{
        console.log('2 sec k wait kro ');
        setTimeout(() => {
            console.log("2 sec lag gaye");
            resolve();
            // reject();
        }, 2000);
    });
})
.then(()=>{
    console.log("dono kam ho gaye");
})
// .catch(()=>{
//     console.log('kuch galat ho gya');
// });