


// Closures:
// A closure is a function that has access to its own scope, 
// the outer function's scope, and the global scope.

function someFun(){
    let username='einstein';
    function displayUsername(){
        console.log(username);
    }
    return displayUsername;
}
let returnedFun=someFun();
returnedFun(); // Output: einsteinc 