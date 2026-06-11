

// forEach methods:
// It is a method which accepts a callback function and 
// executes that function for each element in the array. 
// It does not return a new array, it simply performs the 
// specified action on each element of the array.

// syntax:  
// array.forEach(function(currentValue, index, arr), thisValue)

// example:

// let students=['sachin', 'hardik', 'manish', 'sufiya', 'akshay'];

// students.forEach(function(item){
//     console.log(item);
// });

// students.forEach(function(item, index){
//     console.log(item, index);
// });




// map method:
// It is a method which also accepts a callback function and 
// executes that function for each element in the array. 
// However, it returns a new array containing the results of 
// applying the provided function to each element of the original array.

// syntax:
// array.map(function(currentValue, index, arr), thisValue)

// example:

// let marks=[10,15,18,9,28,12,5,40];

// let newmarks=marks.map(function(item){
//     return item*2;
// });
// console.log(marks);
// console.log(newmarks);

// let newmarks=marks.map(function(item, index){
//     return [item*2, index];
// });
// console.log(marks);
// console.log(newmarks);




// filter method:
// It is a method which also accepts a callback function and 
// executes that function for each element in the array. 
// However, it returns a new array containing only the elements 
// that satisfy the condition specified in the callback function.

// You can only return value but you cannot return index in filter method 
// because it is used to filter the elements based on the condition and it 
// does not return the index of the elements.

// syntax:
// array.filter(function(currentValue, index, arr), thisValue)

// example:

// let marks=[1,2,3,4,5,6,7,8,9,10];

// let newmarks=marks.filter(function (item) {
//     if(item>=5){
//         return true;
//     }
//     return false;
// })
// console.log(marks);
// console.log(newmarks);




// sort method:
// it is s method which is used to sort the elements of an array 
// in place and returns the sorted array. The default sort order 
// is ascending, built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.
// It will sort the array in lexicographical order because it converts the
// elements into strings and then compares their sequences of UTF-16 code units values.

// syntax:
// array.sort(compareFunction)

// example:

// let arr=[12,62,34,15,88,9,6,36,76,45];
// console.log(arr);
// let newarr=arr.sort();   
// console.log(newarr); // [12, 15, 34, 36, 45, 6, 62, 76, 88, 9]

// let arr=['dev','deepanshi','deepanshu','deepak'];
// console.log(arr);
// let newarr=arr.sort();
// console.log(newarr); // ['deepak', 'deepanshu', 'deepanshi', 'dev']

let arr=[12,62,34,15,88,9,6,36,76,45];
console.log(arr);
let newarr=arr.sort((a, b) => a - b);   
console.log(newarr); // [6, 9, 12, 15, 34, 36, 45, 62, 76, 88]
let newarr2=arr.sort((a,b) => b-a); 
console.log(newarr2); // [88, 76, 62, 45, 36, 34, 15, 12, 9, 6]