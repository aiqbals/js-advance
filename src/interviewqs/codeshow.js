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

let a = () => arguments; 
console.log('hi') 
// we dont get it using arrow fn cuz arguments doesnt bind to arr fn variable. 
// So dont sue arg in arr fn rather use 
let a = (...n) => n; 
console.log('hi') 


5. 
let x = function() {
    return 
    {
        message: 'hi'
    }
}
console.log(x());
// wont work cuz of line braking in return statement cuz js finds it as return ; which is return nothing

6.1 
let profile = {
    name: 'hoque'
}
// to avaoid adding new properties
Object.freeze(profile);

// to modify any existing property without adding age property - use seal
Object.seal(profile)

profile.name = 'azief'; // will not be added to modify when use freeze but seal
profile.age = 3; // will not be added when use freeze and seal

console.log(profile);

6.2
let profile = {
    name: 'hoque',
    age: 3
}
// to modify name and adding property age which is not modifyable 
Object.defineProperties(profile, 'age', {
    value: 3,
    writable: false
})

profile.name = 'Azief';
profile.age = 3;

console.log(profile);


7.
console.log(Math.max()) 
// -infinity cuz it start comparing wih the lowest value e.g. 1 if the equation is Math.max(1,2,4)

8. // type casting
console.log([] + []); // output: empty string
console.log({} + []); // output: 
console.log({} + {}); // output: 
console.log(String([])) // output: empty string

9.
function  a() {
    return 'hello';
}
const sentence = a 'hi'
console.log(sentence) // output: hello cuz hi would be ignored since fn doesnt take agruemnt 

10. 
//how to make all content of a web page editable
//<div contenteditable="ture"> Hellow </div>
document.body.contentEditable = true;
