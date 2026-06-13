
// Constructor Function:
// A constructor function is a special type of function that is used to create and initialize objects. 
// It is typically defined with a capitalized name to distinguish it from regular functions. 
// When called with the 'new' keyword, it creates a new object and sets the context (this) to that new object.


// CONVENTION : 
// 1. Constructor function name should start with capital letter.
// 2. Constructor function should be called with 'new' keyword.


// function fun(){
// }
// let name=fun();
// console.log(name); // undefined


// creating constructor function: 

// function User(){
// }
// let user1=new User();
// console.log(user1); // User{} : empty object


// function User(){
//     this.username="krishna";
//     this.love='radhe';
// }
// let user1=new User();
// console.log(user1); // User{username: "krishna", love: "radhe"}


// function User(username, love){
//     this.username=username;
//     this.love=love;
// }
// let user1=new User("krishna", "radhe");
// console.log(user1); // User{username: "krishna", love: "radhe"}
// let user2=new User("sid", "kiara");
// console.log(user2); // User{username: "sid", love: "kiara"}


// function User(username, love) {
//     this.username = username;
//     this.love = love;
//     this.description = function () {
//         return `my name is ${this.username} and i love ${this.love}`;
//     }
// }
// let user1 = new User("krishna", "radhe");
// console.log(user1); // User{username: "krishna", love: "radhe", description: ƒ}
// console.log(user1.description()); // my name is krishna and i love radhe
// let user2 = new User("sid", "kiara");
// console.log(user2); // User{username: "sid", love: "kiara", description: ƒ}
// console.log(user2.description()); // my name is sid and i love kiara
// console.log(User.__proto__); // ƒ () { [native code] }


function User(username, love) {
    this.username = username;
    this.love = love;
}
User.prototype.description = function () {
    return `my name is ${this.username} and i love ${this.love}`;
}
let user1 = new User("krishna", "radhe");
console.log(user1); // User{username: "krishna", love: "radhe", description: ƒ}
console.log(user1.description()); // my name is krishna and i love radhe
let user2 = new User("sid", "kiara");
console.log(user2); // User{username: "sid", love: "kiara", description: ƒ}
console.log(user2.description()); // my name is sid and i love kiara


