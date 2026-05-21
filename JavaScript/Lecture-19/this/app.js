

// this keyword in JavaScript
// The this keyword in JavaScript refers to the current object that is executing the code. 
// It is a special keyword that allows us to access properties and methods of the current object.
// The value of this depends on how the function is called.

// In a regular function, this refers to the global object (window in browsers) or undefined in strict mode.
// In an object method, this refers to the object that the method is a property of.
// In a constructor function, this refers to the newly created object that is being initialized.
// In an arrow function, this refers to the enclosing lexical context (the value of this in the outer function).
 
let obj={
    name:"sam",
    evs:90,
    cn:90,
    web:100,
    maths:10,
    total: function(){
        return (this.evs + this.cn + this.web + this.maths);
    },
    bulao:function(){
        return (`${this.name} ko bulao`);
    }
}

console.log(obj.evs);
console.log(obj.total());
console.log(obj.bulao());