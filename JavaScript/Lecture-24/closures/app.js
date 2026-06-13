

// closures:
// A closure is a function that has access to its own scope, 
// the outer function's scope, and the global scope. 
// It allows a function to remember and access variables from its 
// outer scope even after the outer function has finished executing.

// cloures are used to create private variables and functions.


// function anything(){
//     let naam="radhe";

//     function printName(){
//         console.log(naam);
//     }
//     printName();
// }
// anything();  // radhe



// function anything(){
//     let naam="radhe";

//     function printName(){
//         console.log(naam);
//     }
//     return printName;
// }
// let returnedFun=anything();
// returnedFun();  // radhe 



// real life uses:

// case 1:

// function counter(){
//     let count=0;

//     function getCount(){
//         return count;
//     }

//     return getCount;
// }
// let counter1=counter();
// console.log(counter1);  // [Function: getCount]
// console.log(counter1());  // 0


// case 2:

// function counter(){
//     let count=0;

//     return {
//         getCount:function(){
//             return count;
//         }
//     }
// }
// let counter1=counter();
// console.log(counter1);  // { getCount: [Function: getCount] }
// console.log(counter1.getCount());  // 0


// case 3: small application of closure

function counter(){
    let count=0;

    return {
        getCount: function(){
            return count;
        },
        increment: function(){
            count+=1;
        },
        decrement: function(){
            count-=1;
        },
        reset: function(){
            count=0;
        }   
    }
}
let counter1=counter();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());