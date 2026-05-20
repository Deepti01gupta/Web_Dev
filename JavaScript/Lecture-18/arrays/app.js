// EVERYTHING IN JAVASCRIPT IS AN OBJECT, EXCEPT FOR PRIMITIVE DATA TYPES (NUMBER, STRING, BOOLEAN, NULL, UNDEFINED, SYMBOL)

// Arrays: Ordered collections of values
// can hold any type of data, including other arrays and objects

// let arr1=[1,2,3,4,5];
// console.log(arr1); // [1, 2, 3, 4, 5]
// console.log(arr1[2]);  // 3
// console.log(arr1[31]); // undefined, because there is no element at index 31

// Arrays can hold any type of data
// let arr2=[1, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]];
// console.log(arr2); // [1, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]]

// Arrays have a length property that returns the number of elements in the array
// it is not method it is a property, so we do not use parentheses
// console.log(arr1.length); // 5
// console.log(arr2.length); // 7


// let x=console.log(arr2[0]);
// console.log(typeof(x)); // undefined, because console.log does not return any value, it just prints to the console
// console.log(typeof(arr2[0])); // number, because the first element of arr2 is a number (1)


// all line can be executed in one go, but they will be executed in order, so the output will be 10, 20, 30
// semicolon is used to separate statements, but it is not mandatory in JavaScript, 
// so we can write multiple statements in one line without semicolons, 
// but it is not recommended for readability reasons
// console.log(10); console.log(20); console.log(30);



// let arr2=[1, 2, 'alshay', 'neha', 'sachin', null, undefined, [10,'kartik',12, ['sam',101,102]], true];
// console.log(arr2[7][3][0]); // sam
// console.log(arr2[7][3]); // ['sam', 101, 102]
// console.log(arr2[7][1]); // kartik


// push and pop are destructive methods, which means they modify the original array
// shift and unshift are also destructive methods, which means they modify the original array
// pop and shift return the removed element, while push and unshift return the new length of the array
let arr=[10,20,30];
console.log(arr); // [10, 20, 30]
arr.push(40); // adds 40 to the end of the array
console.log(arr); // [10, 20, 30, 40]
arr.pop(); // removes the last element of the array (40 in this case)
console.log(arr); // [10, 20, 30]
arr.unshift(0); // adds 0 to the beginning of the array
console.log(arr); // [0, 10, 20, 30]
arr.shift(); // removes the first element of the array (0 in this case)
console.log(arr); // [10, 20, 30]



