
// Objects in JavaScript
// An object is a collection of properties, where each property is defined as a key-value pair.
// it is unordered collection of data and it is mutable (can be changed after creation).

// why objects are important?
// 1. Objects allow us to store and organize data in a structured way.
// 2. They provide a way to represent real-world entities and their attributes.
// 3. Objects can have methods (functions) that allow us to perform actions on the data they contain.
// 4. They are fundamental to object-oriented programming, which is a popular programming paradigm.
// 5. Objects can be used to create complex data structures, such as arrays of objects or nested objects.
// 6. By using dot notation or bracket notation, we can easily access and manipulate the properties of an object.

// let person={
//     name:'om',
//     age:18,
//     ismale:true,
//     favColour:'black',
// };

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.ismale);
// console.log(person.favColour);

// key can act as a index to access the value of the property in an object. 
// we can use bracket notation to access the properties of an object using the key as an index.

// console.log(person['name']);
// console.log(person['age']);
// console.log(person['ismale']);
// console.log(person['favColour']);


// object are pass by reference in JavaScript, which means that when we assign an object to a variable, 
// we are actually assigning a reference to the object in memory, rather than creating a copy of the object.

let person1={
    name:'om',
    age:18,
    ismale:true,
    favColour:'black',
};

let person2=person1;
console.log(person1); 
console.log(person2);
person2.name='om patel';
console.log(person1);
console.log(person2);
