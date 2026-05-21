


// let arr=[10,20,30,40,50,60];
// console.log(arr); // [10, 20, 30, 40]


// 1. slice is a non-destructive method, which means it does not modify the original array, it returns a new array
// it takes two arguments: the start index and the end index (exclusive)
// if the end index is not provided, it will slice until the end of the array
// if the start index is not provided, it will slice from the beginning of the array
// if both start and end index are not provided, it will return a copy of the original array

// console.log(arr.slice(2)); // [30, 40], because it slices from index 2 to the end of the array
// console.log(arr.slice(1, 3)); // [20, 30], because it slices from index 1 to index 3 (exclusive), so it includes index 1 and index 2, but not index 3
// console.log(arr.slice()); // [10, 20, 30, 40], because it returns a copy of the original array, since both start and end index are not provided
// console.log(arr); // [10, 20, 30, 40], because slice does not modify the original array



// 2. splice is a destructive method, which means it modifies the original array, it returns an array of removed elements
// it takes three arguments: the start index, the number of elements to remove, and the elements to add (optional)
// if the number of elements to remove is not provided, it will remove all elements from the start index to the end of the array
// if the elements to add are not provided, it will just remove the specified number of elements
// if some value is provided for elements to add, it will add those elements at the start index after removing the specified number of elements

// console.log(arr.splice(2)); // [30, 40], because it removes all elements from index 2 to the end of the array, so it removes index 2 and index 3
// console.log(arr);

// arr=[10,20,30,40,50,60];
// console.log(arr); // [10, 20, 30, 40, 50, 60]
// console.log(arr.splice(2,2,'sam','deepti','om')); // [30, 40, 50, 60], because it removes 2 elements from index 2, so it removes index 2 and index 3, and it adds 'sam', 'deepti' and 'om' at index 2
// console.log(arr); // [10, 20, 'sam', 'deepti', 'om'], because splice modifies the original array



// 3. join is a non-destructive method, which means it does not modify the original array, it returns a string by concatenating all the elements of the array, separated by a specified separator (optional)
// if the separator is not provided, it will use a comma (,) as the default separator

// arr=[10,20,30,40,50,60];
// console.log(arr.join()); // "10,20,30,40,50,60"
// console.log(arr.join(' ')); // "10 20 30 40 50 60"
// console.log(arr.join(' - ')); // "10 - 20 - 30 - 40 - 50 - 60"



// 4. concat is a non-destructive method, which means it does not modify the original array, it returns a new array by concatenating the original array with one or more arrays or values provided as arguments
// it can take any number of arguments, and each argument can be an array or a value    

// let arr=[10,20,30];
// let arr2=[40,50,60];
// console.log(arr.concat(arr2)); // [10, 20, 30, 40, 50, 60], because it concatenates arr and arr2
// console.log(arr); // [10, 20, 30], because concat does not modify the original array
// console.log(arr.concat(70,80)); // [10, 20, 30, 70, 80], because it concatenates arr with the values 70 and 80



// 5. includes is a non-destructive method, which means it does not modify the original array, it returns a boolean value (true or false) indicating whether the specified element is present in the array or not
// it takes one argument: the element to search for in the array

// let arr=[10,20,30];
// console.log(arr.includes(20)); // true, because 20 is present in the array
// console.log(arr.includes(40)); // false, because 40 is not present in the array

// let x='sachin';
// console.log(x.includes('a')); // true, because 'sachin' contains the character 'a'
// console.log(x.includes('z')); // false, because 'sachin' does not contain the character 'z'



// 6. indexOf is a non-destructive method, which means it does not modify the original array, it returns the index of the first occurrence of the specified element in the array, or -1 if the element is not found
// it takes one argument: the element to search for in the array

// let arr=[10,20,30,20];
// console.log(arr.indexOf(20)); // 1, because the first occurrence of 20 is at index 1
// console.log(arr.indexOf(40)); // -1, because 40 is not present in the array



// 7. reverse is a destructive method, which means it modifies the original array, it reverses the order of the elements in the array and returns the reversed array

// let arr=[10,20,30];
// console.log(arr);
// console.log(arr.reverse()); // [30, 20, 10], because it reverses the order of the elements in the array
// console.log(arr); // [30, 20, 10], because reverse modifies the original array