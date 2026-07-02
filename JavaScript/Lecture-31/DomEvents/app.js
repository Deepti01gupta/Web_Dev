


// ----------------onclick event-------------------------------
// onmouseover event : it is used to perform an action when the user moves the mouse over an element.
// onmouseleave event : it is used to perform an action when the user moves the mouse out of an element.

// btn.onmouseenter=function(){
//     btn.style.backgroundColor="red";
//     btn.style.color="white";
// }

// btn.onmouseleave=function(){
//     btn.style.backgroundColor="purple";
//     btn.style.color="white";
// }



// ----------------onclick event with multiple functions-------------------------------
// let btn=document.getElementById("btn");
// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("two");
// }
// btn.onclick=one;
// btn.onclick=two; // ye dono function me se sirf last wala hi call hoga kyuki humne dono ko same event ke liye assign kiya hai.



// ----------------addEventListener-------------------------------
// addEventListener is used to assign multiple functions to the same event.
// it accepts two arguments: the event type and the function to be executed when the event occurs.

// let btn=document.getElementById("btn");
// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("two");
// }
// btn.addEventListener("click",one);
// btn.addEventListener("click",two); // ye dono function call honge kyuki humne dono ko same event ke liye assign kiya hai using addEventListener.



// ------------question-------------------------------
// btn click -> body ka backgorup color = palm

// let btn=document.getElementById("btn");
// let bodyel=document.querySelector("body");

// function change(){
//     btn.style.backgroundColor="pink";
//     btn.style.color="black";
// }
// btn.addEventListener('click',change);
// btn.addEventListener('click',function(){
//     bodyel.style.backgroundColor="palegreen";
// })



// ondoubleclick event : it is used to perform an action when the user double clicks on an element.

let btn=document.getElementById("btn");
let bodyel=document.querySelector("body");
btn.addEventListener('dblclick',function(){
    bodyel.style.backgroundColor="palegreen";
    btn.style.backgroundColor="pink";
    btn.style.color="black";
});



// addEventListener is the best way to assign multiple functions to the same event because it 
// allows you to add multiple event listeners to the same element without overwriting existing ones. 
// This is particularly useful when you want to perform multiple actions in response to a single event, 
// such as a click or double-click.













