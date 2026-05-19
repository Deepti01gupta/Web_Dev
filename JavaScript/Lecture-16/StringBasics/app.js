
// let magicNum=10;
// // let magicNum='sam';  // let cannot be redeclared but can be reassigned
// magicNum='samarth vohra is a web mentor';
// console.log(magicNum);
// console.log(magicNum[23]);
// console.log(magicNum[100]);

// let naam='samarth';
// console.log(naam);

// let a;
// console.log(a);
// a=30;
// console.log(a);



// STRING METHODS

// 1. str.substr(startIndex, length): Returns a substring starting from the specified index and of the specified length. 
// If the start index is negative, it counts from the end of the string. If the length is negative, it returns an empty string.

let str;
str='krishna radha';
console.log(str);
console.log(str.substr(2,5));
console.log(str.substr(-5,5));
console.log(str.substr(-5,-5));



// 2. str.substring(startIndex, endIndex): Returns a substring between the specified start and end indices. 
// If the start index is greater than the end index, it swaps them. If either index is negative or greater than 
// the string length, it treats them as 0 or the string length, respectively.

console.log(str.substring(2,5));
console.log(str.substring(5,2));
console.log(str.substring(-5,5));
console.log(str.substring(2,-5));



// 3. indexOf(searchValue): Returns the index of the first occurrence of the specified search value in the string.

console.log(str.indexOf('ra'));
console.log(str.indexOf('ra'));
// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of the specified search value in the string,
// starting from the specified index. If the search value is not found, it returns -1.

console.log(str.indexOf('ra',5));
console.log(str.indexOf('ra',10));
console.log(str.indexOf('ra',15)); 



// 4. replace(searchValue, newValue): Returns a new string with the first occurrence of the specified search value replaced by the new value.
console.log(str.replace('ra','RA'));



// 5. replaceAll(searchValue, newValue): Returns a new string with all occurrences of the specified search value replaced by the new value.
console.log(str.replaceAll('a','#'));



// 6. repeat(count): Returns a new string that repeats the original string the specified number of times.
console.log(str.repeat(3));



// 7. toUpperCase(): Returns a new string with all characters converted to uppercase.
console.log(str.toUpperCase());



// 8. toLowerCase(): Returns a new string with all characters converted to lowercase.
console.log(str.toLowerCase()); 



// 9. trim(): Returns a new string with whitespace removed from both ends of the original string.   
let str2='   hello world   ';
console.log(str2);
console.log(str2.trim());



// 10. concat(str1, str2, ...): Returns a new string that is the concatenation of the original string and one or more additional strings.
let str3='hello';
let str4='world';
console.log(str3.concat(' ',str4));



// 11. split(separator): Returns an array of substrings created by splitting the original string at each occurrence of the specified separator.
let str5='apple,banana,orange';
console.log(str5.split(','));



// 12. charAt(index): Returns the character at the specified index in the string.
console.log(str.charAt(2));
console.log(str.charAt(100)); // returns empty string if index is out of range