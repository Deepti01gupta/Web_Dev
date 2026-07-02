

// WRONG WAY OF WRITING ASYNC CODE

// function step1(){
//     setTimeout(() => {
//         console.log("image select kar rha hu")
//         return "image";
//     }, 4000);
// }

// function step2(image){
//     setTimeout(() => {
//         console.log(`sundar kar rha hu ${image}`)
//         return "sundar wali photo";
//     }, 2000);
// }

// function step3(filter){
//     setTimeout(() => {
//         console.log(`caption dhund rha hu ${filter}`)
//         return "caption done ";
//     }, 3000);
// }

// function step4(final) {
//     setTimeout(() => {
//         console.log(`${final} uploaded`);
//     }, 2000);
// }

// let image=step1();
// let filter=step2(image);
// let caption=step3(filter);
// // let upload=step4(caption);
// step4(caption);





// RIGHT WAY OF WRITING ASYNC CODE

function step1(fn){
    setTimeout(() => {
        console.log("selecting image")
        // return "image";
        fn('image');
    }, 4000);
}

function step2(image, fn){
    setTimeout(() => {
        console.log(`applying filter to ${image}`)
        // return "filter applied";
        fn("filter applied");
    }, 2000);
}

function step3(filter, fn){
    setTimeout(() => {
        console.log(`adding caption to ${filter}`)
        // return "caption done ";
        fn("caption done ");
    }, 3000);
}

function step4(final) {
    setTimeout(() => {
        console.log(`${final} uploaded`);
    }, 2000);
}

step1(function(image){
    step2(image, function (filter) {
        step3(filter, function (caption) {
            step4(caption);
        });
    });
});


// CALLBACK HELL:
// callback hell is the situation where we have multiple nested callbacks 
// which makes our code look messy and hard to read. 
// In the above example, we have three nested callbacks for step1, step2, 
// and step3, which can lead to callback hell if we have more steps or 
// if the logic becomes more complex. To avoid callback hell, we can 
// use Promises or async/await syntax to write cleaner and more readable 
// asynchronous code.
// high dependency on the previous step is also a problem in callback hell,
// as if any step fails, it can affect the entire flow of the code.
// From solving callback hell, we can use Promises or async/await syntax to 
// write cleaner and more readable asynchronous code. 
// Callback hell ----> Promises ----> Async/Await