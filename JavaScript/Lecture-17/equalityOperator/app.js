

console.log(1==1); // true
console.log(1===1); // true
console.log(1=="1"); // true
console.log(1==="1"); // false
console.log(true==1); // true
console.log(true===1); // false
console.log('1'==true); // true
console.log('1'===true); // false
console.log('true'==true); // false
console.log('true'===true); // false
console.log(''==0); // true
console.log(''===0); // false


console.log(undefined==0); // false, because undefined is only equal to null and itself (undefined)
console.log(undefined===false); // false
console.log(null==0); // false
console.log(null==false); // false 
console.log(null==undefined); // true, because null and undefined are considered equal in non-strict equality
console.log(null===undefined); // false, because they are of different types (null is an object and undefined is a primitive)