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
};



// Excercises
// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(console.log);

async function fetchStarship() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      }),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops", err);
  }
};
