/* const promise = new Promise( (resolve, reject) => {
    if(true) {
        resolve('Stuff wroked!');
    } else {
        reject('Error! It broke...')
    }
}) */

//promise.then(res => console.log(res));
/* promise.then(res => res + '?').then(res2 => {
    throw Error
    console.log(res2);
}).catch( () => console.log('err!')) */

/* promise.then(res => res + '?')
.then(res2 => res2 + '$')
.catch( () => console.log('err!'))
.then( res3 => {
    throw Error
    console.log(res3 + '&');
}) */
//res3 blcok of code err will not be catched since catch is declared before res3

/* const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hiiii resolve')
}) 
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Hiiii resolve')
}) 
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Hiiii resolve')
}) 

Promise.all([promise, promise2, promise3, promise4])
    .then(value => {
        console.log(value);
    }) */



// **********real world application of promises **********

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then( results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('Err!'))
//make a spell mistake in the url to check catch to have promise reject msg

// Excercises
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise( (resolve, reject) => {
	setTimeOut( () => {
		resolve('success');
	}, 4000)
});

// #2) Run the above promise and make it console.log "success"
//promise.then(console.log);
promise.then(resp => console.log(resp))
// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
/*const promise = new Promise( (resolve, reject) => {
	setTimeout(resolve, 4000, 'success')
});*/
const promise = Promise.resolve(
	setTimeout(()=> {
		console.log('success');
	}, 4000)
);
// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
	.then(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
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
  .catch(err => console.log('ughhhh fix it!', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

// test...