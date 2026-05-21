
// LOOPS IN JAVASCRIPT
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For-In Loop
// 5. For-Of Loop

// special keywords in loops
// break
// continue


// 1. For Loop:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// for(let i=0; i<=5; i++){
//     for(let j=0; j<=5; j++){
//         if(i==j){
//             break;
//         }
//         console.log(`${i} , ${j}`);
//     }
// }



// 2. While Loop:
// while (condition) {
//     // code to be executed
// }

// let i=100;
// while(i>0){
//     console.log(i);
//     i-=10;
// }



// 3. Do-While Loop:
// do {
//     // code to be executed
// } while (condition);

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);



// 4. For-In Loop: for iterating over the properties of an object
// for (variable in object) {
//     // code to be executed
// }

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }



// 5. For-Of Loop: for iterating over the values of an iterable object (like arrays, strings, etc.)
// for (variable of iterable) {
//     // code to be executed
// }

// const arr = [10, 20, 30, 40, 50];

// for(let value of arr){
//     console.log(value);
// }