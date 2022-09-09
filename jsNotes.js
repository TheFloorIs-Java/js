// var doesn't have block scope.
// vars are invisibly moved to the top of the file, unless it's in a function. this is called hoisting.
var x = true;
// constant, cannot be changed
const y  = 5;
// a variable with all scopes - function, block, global, lexical
let z = 3;

// javascript is loosely typed
// because it's loosely typed and refuses to cause errors, we end up with something called 
// type coersion, so types can be converted to each other even when it doesn't make sense.
// in this case, y is being coerced into a boolean.
// truthy and falsy values: zeroes, nulls, and empty string resolve to false automatically. the rest are true.
// particularly useful if we get null back from an api.

let x1 = true;
let x2 = null;
console.log(x1 == x2);
console.log(x2 == x1);
// === is a hard comparison - there is no type coersion, and the types are compared - so "5" is not equal to 5 any more.
console.log(x2 === x1);


// callback functions are functions passed into another as a parameter, and run inside the outer function
// this is how button.onclick worked, as well as onreadystatechange - we were setting a variable (like onclick)
// to be a function, so that it could be run later internally by javascript
function callback() {
    console.log("printed from callback!");
}
let storedFunction = callback;
function runCallback(func){
    func();
}
runCallback(callback);

// versioning: es6+ vs previous
/*
most importantly, 'let' and 'const' were added
template literals, arrow functions
*/

let arr = [0,1,2,3,4];
// there are similar functions for filter, sort
console.log(arr.map(value => 2*value));