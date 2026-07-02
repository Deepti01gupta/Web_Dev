

// CLASSLIST:
// The classList property returns the class name(s) of an element as a DOMTokenList object. 
// This property is useful to add, remove, toggle and contains CSS classes on an element.


// --------------ADD-------------------------------
// use to add one or more class names to an element. If the specified class already exists, it will not be added again.


// let art=document.querySelector("article");
// art.classList.add('sam');
// art.classList.add('samarth');
// art.classList.add('sam samarth');  // wrong way to add multiple classes using classList.add() method
// art.classList.add('sam','samarth' ,'neha');
// art.classList.add('changu-mangu');



// --------------REMOVE-------------------------------
// use to remove one or more class names from an element. If the specified class does not exist, it will be ignored.

// let art=document.querySelector("article");
// art.classList.add('sam','samarth' ,'neha', 'maniket', 'changu-mangu');
// art.classList.remove('sam');
// art.classList.remove('samarth', 'neha');



// --------------TOGGLE-------------------------------
// use to toggle one or more class names for an element. If the class exists, it will be removed and if it does not exist, it will be added.

// let art=document.querySelector("article");
// art.classList.toggle('toggle');



// --------------CONTAINS-------------------------------
// use to check if an element has a specific class name. It returns true if the class exists, otherwise it returns false.

// let art=document.querySelector("article");
// art.classList.add('sam','samarth' ,'neha', 'maniket', 'changu-mangu');
// console.log(art.classList.contains('sam'));  // true
// console.log(art.classList.contains('deepak')); // false
