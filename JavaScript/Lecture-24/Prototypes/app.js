
// prototypes in JavaScript:
// Every object in JavaScript has a prototype. 
// A prototype is also an object. 
// All JavaScript objects inherit their properties and methods from their prototype.
// It is also another object which is used as a fallback source of properties.

// If you try to access a property of an object, then javascript will firstly 
// find it inside that object, then if not foung, it will go to its prototypes.


// let todo={
//     title:'buy flowers',
//     desc:function(){
//         return 'your task is to '+this.title;
//     }
// };
// console.log(todo.title); // buy flowers
// console.log(todo.desc());  // your task is to buy flowers
// console.log(todo.address); // undefined
// console.log(todo.toString); // [Function: toString]
// console.log(todo.toString()); // [object Object]


// This concept is called prototype chaining / inheritance.
// dender __proto__ is used to access the prototype of an object.
// syntax: object.__proto__

// what is the prototype of an object?
// The prototype of an object is the object from which it inherits properties and methods.

let todo={
    title:'buy flowers',
    desc:function(){
        return 'your task is to '+this.title;
    }
};
console.log(todo.__proto__); // {}
console.log(todo.__proto__.__proto__); // {}
console.log(todo.toString()); // [object Object]
console.log(todo.toString().__proto__); // [object Object]