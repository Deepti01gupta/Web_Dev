

let a=true;
console.log(a);

let b=false;
console.log(b);

let ans1= a==b;
console.log(ans1);

let one='true';
let ans2= a==one;
console.log(ans2);  // In JavaScript, the boolean values true and false are not equal to the string values 'true' and 'false'.

let x=1;
let ans3= a==x;
console.log(ans3);  // In JavaScript, the boolean value true is equal to the number 1 when using loose equality (==), but not when using strict equality (===).

let ans4= a===x;
console.log(ans4);  // In JavaScript, the boolean value true is not strictly equal to the number 1, so this will return false.