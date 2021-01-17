let a1 = [3,7,9,2,5,50,15];
let a2 = [3,[7,9],2,[5,50,15]];
let a3 = [3,[7,[9,8]],2,[5,[50,15]]];
a2.flat(); // convert nested array to single array
a3.flat(); // doesnt work on a3 cuz it works only one level of nesting bydefault. 
a3.flat(2); // it works cuz we specify the nesting level


const test = a3.flatMap(eachItem => eachItem + '!');
//check test output in console

const userEmail = '      adf@gmail.com'
const userEmail2 = 'adf@gmail.com     '
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

let userProfile = [['cammanderTom', 23], ['asdkLander', 40], ['testMan', 35]];
Object.fromEntries(userProfile); // convert to JS object exact opposite of Entries in ES8
Object.entries( Object.fromEntries(userProfile) ); // convert previous state



//before
try {
    a+5
} catch(e) {
    console.log('u messed up!' + e);
}
//now
try {
    a+5
} catch {
    console.log('u messed up!');
}

//Excercise

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const array2 = array.flat(10);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')));



//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flatMap(x => x.join(' ')).join(' '))


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimEnd().trimStart())


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
//Solution
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)