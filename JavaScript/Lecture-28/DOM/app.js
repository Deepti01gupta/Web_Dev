

// DOM:

// SELECTORS:
// 1. getElementByTagName(): it returns a collection of elements with the specified tag name. It returns an HTMLCollection of elements with the given tag name.
// 2. getElementById(): it returns the element with the specified id. It returns a single element object with the given id.
// 3. getElementByClassName(): it returns a collection of elements with the specified class name. It returns an HTMLCollection of elements with the given class name.
// 4. querySelector(): it returns the first element that matches a specified CSS selector(s). It returns a single element object that matches the specified selector.
// 5. querySelectorAll(): it returns a collection of all elements that match a specified CSS selector(s). It returns an NodeList of elements that match the specified selector.


// .style() method is used to change the style of an element. 
// It can be used to change the color, font size, background color, etc. of an element.





// console.log(document)

// -------------------TAGNAME-------------------

// console.log(document.getElementsByTagName('h1'));

// let h1arr=document.getElementsByTagName('h1');
// console.log(h1arr[0]);
// console.log(h1arr[1]);


// let paraarr=document.getElementsByTagName('p');
// console.log(paraarr[0]);
// console.log(paraarr[1]);
// console.log(paraarr[2]);
// console.log(paraarr[3]);
// console.log(paraarr[4]);

// for(let i=0; i<paraarr.length; i++){
//     console.log(paraarr[i]);
// }

// for(let item of paraarr){
//     item.style.color='purple';
//     item.style.fontSize='20px';
//     item.style.fontStyle='italic';
// }



// --------------------ID-------------------

// if two elements have same id then getElementById() will return the first element with that id. 
// It is not recommended to use same id for multiple elements. Id should be unique for each element.

// let id=document.getElementById('sam');
// console.log(id);   // h2#sam

// id.style.color="green";
// id.style.fontSize="50px";



// --------------------CLASSNAME-------------------

// push and pop are not allowed to the array we get from getElementsByClassName() because it is not an array but an HTMLCollection.

// let para=document.getElementsByClassName('dom');
// console.log(para);  // HTMLCollection(4) [p.dom, p.dom, p.dom, p.dom]

// for(let item of para){
//     item.style.color='brown';
//     item.style.fontSize='100px';
//     item.style.fontStyle='italic';
// }



// ---------------------QUERYSELECTOR-------------------

// . is used for class
// # is used for id
// <tag name> is used for tag name

// let h1=document.querySelector('h1');
// console.log(h1);  // h1

// let dom=document.querySelector(".dom");
// console.log(dom);  //  p.dom

// let sam=document.querySelector("#sam");
// console.log(sam);  // h2#sam



// ---------------------QUERYSELECTORALL-------------------

// let h1=document.querySelector('h1');
// console.log(h1);  // h1


// let dom=document.querySelector(".dom");
// console.log(dom);  // p.dom


 
// ---------------------QUERYSELECTORALL-------------------

// let para=document.querySelectorAll('.dom');
// console.log(para);  // NodeList(4) [p.dom, p.dom, p.dom, p.dom]


// let h1=document.querySelectorAll('h1');
// console.log(h1);  // NodeList(2) [h1, h1]


// let sam=document.querySelectorAll('#sam');
// console.log(sam); // NodeList(2) [h2#sam, h4#sam]




