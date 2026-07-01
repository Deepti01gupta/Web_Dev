

// parent of html is null.


// ------------------ParentElement--------------------
// parentElement: Returns the parent element of the specified element.

let para1=document.querySelector("#para1");
console.log(para1.parentElement); // <article id='arti'>....</article>
console.log(para1.parentElement()); // error: it is not a function


// let x=para1.parentElement;
// console.log(x); // acticle
// console.log(x.parentElement); // section
// console.log(x.parentElement.parentElement);  // body
// console.log(x.parentElement.parentElement.parentElement); // html
// console.log(x.parentElement.parentElement.parentElement.parentElement); // null




// ------------------Children--------------------
// children: Returns a collection of a node's child elements.

// let arti1=document.querySelector("#arti");
// console.log(arti1.children());  // Uncaught TypeError: arti1.children is not a function
// console.log(arti1.children); // HTMLCollection(4) [div, div, div, p#para1, para1: p#para1]


// let col=arti1.children;
// for(let item of col){
//     item.style.color="red";
// }




// ------------------nextElementSibling--------------------
// nextElementSibling: Returns the next element node in the same tree level.

// let div3=document.querySelector("#div3");
// console.log(div3.nextElementSibling); // p#para1



// ------------------previousElementSibling--------------------
// previousElementSibling: Returns the previous element node in the same tree level.

// let div3=document.querySelector("#div3");
// console.log(div3.previousElementSibling); // div 2





