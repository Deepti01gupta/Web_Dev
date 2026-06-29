


// Some Properties of HTML elements:
// 1. innerText : Returns the text content of an element, including text in child nodes, but it does not include any HTML tags.
// 2. textContent : Returns the text content of an element, including text in child nodes, but it does not include any HTML tags.
// 3. innerHTML : Returns the HTML content of an element, including any HTML tags.


// ------------------INNER TEXT-------------------
// let para=document.querySelector('p');
// console.log(para.innerText);  // Hello coders we all are the best



// ------------------TEXT CONTENT-------------------
// let para2=document.querySelector('p');
// console.log(para2.textContent);  // Hello coders we all are the best



// innertext                                vs       textcontent
// it gives the text inside that tag        |       it gives the text inside that tag
// samajhdar(aware of css)                  |       bhuddhu / nasamajh



// ------------------INNER HTML-------------------
// let para3=document.querySelector('p');
// console.log(para3.innerHTML);  // Hello <i>coders</i> <span style="display: none;">we all are the best</span>



// -----------------USING AS GETTER AND SETTER-------------------
// They can also be used to set the content of an element. They can act as getter and setter methods.
// For example, you can use innerHTML to change the content of a div or paragraph element dynamically.

let para3=document.querySelector('p');
console.log(para3.innerHTML);  // Hello <i>coders</i> <span style="display: none;">we all are the best</span>
para3.innerHTML = "Hello <b>coders</b>! Welcome to the world of <i>JavaScript</i>.";
console.log(para3.innerHTML);  // Hello <b>coders</b>! Welcome to the world of <i>JavaScript</i>.




