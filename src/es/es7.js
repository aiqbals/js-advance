//es7 - include
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('dog'));

//es7 - exponential
const square = (x) => x**2;
const cube = (y) => y**3;
console.log(square(4));

// Solve the below problems:
// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let res = dragons2.filter( name => name.includes('John'));
console.log(res);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;
console.log(power100(2));
console.log(power100(1000));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result