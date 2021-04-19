1.
console.log(2 + '2'); // 22 - when it sees '+' concat operator, JS way to convert string
console.log(2 - '2'); // 0 - wen sees '-' operator, js convert it to number


2. 
let nums = [1,2,2,3]; // get unique value only, no duplicate
console.log([...new Set(nums)])

3.
console.log(5 < 6 < 7); // true

console.log(7 > 6 > 5); // false cuz 7>6 is true, means 1. next 1 > 5, so false

4. 
function a() {
    return arguments
} 
console.log('hi') // we get it

let a = () => arguments; // we dont get it using arrow fn
console.log('hi')