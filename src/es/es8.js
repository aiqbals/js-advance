//async await - built on to of Promises 
//promises
movePlayer(100, 'Left')
    .then( () => movePlayer(400, 'Left'))
        .then( () => movePlayer(10, 'Right'))
            .then( () => movePlayer(330, 'Left'))
//async
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left');
    const secondMove = await movePlayer(400, 'Left');
    const thirdMove = await movePlayer(10, 'Right');
    const fourthMove =await movePlayer(330, 'Left')
}

//real life use
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

async function dataFetch() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}
dataFetch();
//try this below - first without try catch thn make spell mitake in url and try again with try catch
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const dataFetch2 = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map( url => 
            fetch(url).then( resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch(err) {
        console.log('Oppps!!', err)
    }
}




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
