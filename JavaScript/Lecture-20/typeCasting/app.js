

// Type Casting in JavaScript
// Type casting is the process of converting a value from one type to another. 
// In JavaScript, there are two types of type casting: 
// implicit type casting and explicit type casting.

function sum1(num1, num2){
    return num1+num2;
}
console.log(sum1(10,20));

function sum2(num1, num2){
    return num1+num2;
}
let ans1=sum2(30,'sam');
console.log(ans1); // 30sam 
console.log(typeof(ans1)); // string
let ans2=sum2(30,true);
console.log(ans2); // 31
console.log(typeof(ans2));  // number
let ans3=sum2(30,false); 
console.log(ans3); // 30
console.log(typeof(ans3));  // number
let ans4=sum2(10);
console.log(ans4); // 10undefined
console.log(typeof(ans4)); // string