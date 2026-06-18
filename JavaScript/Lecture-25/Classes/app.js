

// Class Syntax:
// Class are syntactic sugar over the existing prototype-based inheritance in JavaScript. 
// They provide a cleaner and more intuitive way to create objects and deal with inheritance.
// Before class exists constructor functions were used to create objects and manage inheritance, 
// but they can be less intuitive and more error-prone than classes.


// constructor function
// function Person(firstname, lastname, email){
//     this.firstName=firstname;
//     this.lastName=lastname;
//     this.email=email;
// }
// Person.prototype.printName=function(){
//     console.log(`my name is ${this.firstName} ${this.lastName}`);
// }
// Person.prototype.getName=function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// let person1=new Person("John", "Doe", "john.doe@example.com");
// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());



// class syntax
class Person{
    constructor(firstname, lastname, email){
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
    }
    printName(){
        console.log(`my name is ${this.firstName} ${this.lastName}`);
    }
    getName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
let person2=new Person("John", "Doe", "john.doe@example.com");
console.log(person2); // Person {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'}
console.log(person2.email); // john.doe@example.com
console.log(person2.printName()); // my name is John Doe
console.log(person2.getName()); // John Doe
console.log(person2.__proto__); // Person {printName: ƒ, getName: ƒ, constructor: ƒ}



// if we want to create a child class then we can use the extends keyword to 
// create a child class and the super keyword to call the parent class constructor

// class Student extends Person{
// }
// let student1=new Student("radhe", "krishna", "radhekrishna@example.com");
// console.log(student1);
// console.log(student1.email);
// console.log(student1.printName());
// console.log(student1.getName());
// console.log(student1.__proto__);



class Student extends Person{
    constructor(firstname, lastname, email, groupNo)
    {
        super(firstname, lastname, email);
        this.groupNo=groupNo;
    }
    getName(){
        return `Student name is ${this.firstName} ${this.lastName}`;
    }
}
let student1=new Student("radhe", "krishna", "radhekrishna@example.com", 1);
console.log(student1); // Student {firstName: 'radhe', lastName: 'krishna', email: 'radhekrishna@example.com', groupNo: 1}
console.log(student1.email); // radhekrishna@example.com
console.log(student1.printName()); // my name is radhe krishna
console.log(student1.getName()); // Student name is radhe krishna
console.log(student1.groupNo); // 1
console.log(student1.__proto__); // Student {getName: ƒ, constructor: ƒ}