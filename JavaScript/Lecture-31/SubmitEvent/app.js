

// ----------------Submit Event-----------------
// The submit event is fired when a form is submitted. 
// It can be used to validate form data before sending it to the server.

// let formel=document.querySelector('form');
// formel.addEventListener('submit',function (){
//     event.preventDefault(); // Prevents the default form submission behavior: browsers will not reload the page or navigate away from the current page when the form is submitted.
//     console.log("form submitted");
// });



// ------------------accessing elements of form-----------------
// You can access all the elements of a form using the elements property of the form element. 
// The elements property returns a collection of all the form controls in the form.

// let formel=document.querySelector('form');
// formel.addEventListener('submit',function (e){
//     e.preventDefault();
//     console.log(formel.elements); // Logs all form controls
// });


let formel=document.querySelector('form');
formel.addEventListener('submit',function (e){
    e.preventDefault();
    console.log(formel.elements[0].value);
    console.log(formel.elements[1].value);
});












