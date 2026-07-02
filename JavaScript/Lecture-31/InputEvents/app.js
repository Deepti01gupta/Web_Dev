

// ----------------------INPUT EVENTS----------------------
// Input events are triggered when the value of an input element changes. 
// These events are commonly used to capture user input in real-time, 
// such as when typing in a text field or selecting an option from a dropdown menu.

// whenever an event is run/executed along with the function/event handler, 
// an object is also attched with it which we can have access of. 
// This object is called event object. 
// It contains all the information about the event that has occurred.
// event(object) -> target(element) -> value (value of the element)


// let inp=document.querySelector('input');
// function fun(event){ // anyname will work generally e/event
//     // console.log(event); // event object
//     // console.log(event.target); // element on which the event is triggered
//     console.log(event.target.value); // value of the element on which the event is triggered
//     // console.log("input chal gaya");
// }
// inp.addEventListener('input',fun); 



//------------------Questions------------------

let inp=document.querySelector('input');
let h2=document.querySelector('h2');
inp.addEventListener('input',function (event){
    h2.textContent=event.target.value;
});
















