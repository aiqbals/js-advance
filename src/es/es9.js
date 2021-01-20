// object spread oper. 
const animals = {
    tiger: 2,
    lion: 5,
    monkey: 8,
    bird: 40
}
const {tiger, lion, ...rest} = animals;

function objSprd(p1,p2,p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
objSprd(tiger, lion, rest);


const arr = [3,4,5,6];
function sum(a,b,c,d,e) {
    return a+b+c+d+e;
}
sum(...arr);


//finally
const urls = [
    'http://swapi.dev/apii/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  
  Promise.all(urls.map(url =>
      fetch(url).then(people => people.json())
  ))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(() => console.log('finally is called even if thers are err or not'));



// for await of
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//old way
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
//new way - for await - allow us to loop through promises
const dataFetch3 = async function() {
    const arrOfPromises = urls.map(url => fetch(url));
    for await (let req of arrOfPromises) {
        const data = await req.json();
        console.log(data);
    }
}
  