console.log([]==[]) //false

x = 10 ;
console.log(globalThis.x == 10) ; // true

let y = 5 ;
console.log(window.x==5); //5
console.log(globalThis.y==5);  // false

console.log([]==[]);  //false --arr is Object and object is compared by reference 

console.log(1 === "1"); // false  // value + NO COERCISON

console.log(1=="1"); // true  // vlaue + COERSION 

console.log("1" == 1); // true

console.log(typeof("1")==typeof(1)); // false 

let a = [] ;
let b = ![]; 
console.log(a==b);   // true
console.log(a===b); // false










