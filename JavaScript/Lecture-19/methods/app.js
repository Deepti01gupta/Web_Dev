

// Methods vs Functions
// A method is a function that is a property of an object. 
// A function is a standalone block of code that performs a specific task.

// Functions can be defined in objects as methods, 
// which allows us to perform actions on the data contained within the object.

// let obj={
//     evs:90,
//     cn:90,
//     web:100,
//     maths:10,
//     total: function(){
//         console.log(90+90+100+10);
//     }
// } 

// console.log(obj);
// console.log(obj.total); // this will print the function definition of total method
// console.log(obj.total()); // this will call the total method and execute the code inside it, which will print the sum of the marks.



// If no return statement is present in a function, it will return undefined by default.
 
// let obj={
//     evs:90,
//     cn:90,
//     web:100,
//     maths:10,
//     total: function(){
//         console.log(90+90+100+10);
//     },
//     bulao:function(){
//         console.log("sam ko bulao");
//     }
// }

// console.log(obj.evs);
// console.log(obj.total()); // 290, and undefined
// console.log(obj.bulao()); // sam ko bulao, and undefined

let obj={
    evs:90,
    cn:90,
    web:100,
    maths:10,
    total: function(){
        return (90+90+100+10);
    },
    bulao:function(){
        return ("sam ko bulao");
    }
}

console.log(obj.evs);
console.log(obj.total()); // 290
console.log(obj.bulao()); // sam ko bulao