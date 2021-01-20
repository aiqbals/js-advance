//String operation
'turtle'.padStart(10);
'turtle'.padEnd(10);
//string padding method

const fn = (a,b,c,d,) => {
    console.log(b);
};

fn(2,3,4,5);

// iterating or looping through object
let obj = {
    username0: 'Asif',
    username1: 'Iqbal',
    username3: 'Lany'
} 
// usually if we wanna iterate this object, it hard cuz we first have to
// convert it to array using keys. Only thn we can use forEach or Map, filter etc. method. 
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}); //Object.keys(obj) makes obj as an array

//New syntax - Object.entries/values
Object.entries(obj).forEach((k ) => {
    console.log(k);
});
Object.values(obj).forEach((val ) => {
    console.log(val);
});

//Real life scenario
Object.entries(obj).map(val => {
    console.log(val[1] + val[0].replace('username', ''));
}); //val[1] - second iteam in the array

//Excersices
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'


// #3) Get the below object to go from:
let objj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')
