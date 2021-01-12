// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arF = [];
const arFe = array.forEach(e => {
  arF.push(e.username + '!');
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const arMap = array.map( e => {
  let { username } = e; //destructuring
  return username + '?';
});

//Filter the array to only include users who are on team: red
const arFltr = array.filter( user => {
  return user.team === "red"
});

//Find out the total score of all users using reduce
const arRdc = array.reduce((acc, user) => {
  let score = acc + user.score;
  return score;
}, 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const arLst = array.map((user) => {
   user.items.map(item => item + '!') ;
   return user;
});

/* // Advance JS
const array = [1,2,3,4];
const dbl = [];
const newAr = array.forEach(e => {
  dbl.push(e * 2);
}); //forEach just loop

const arMp = array.map(e => {
  return e * 2
}); // must return

const arFltr = array.filter(e => {
  if( e > 2 ) {
    return e;
  }
});

const arRdc = array.reduce((acc, e) => {
  let sum = acc + e;
  return sum;
}, 0); // combining filtering and mapping */

//Advance object  
//Reference type 
var obj1 = {value: 10};
var obj2 = obj1; // now both will have the same reference in memory for stored value
var obj3 = {value: 10}; //
obj1 = obj2; // ture 
obj1.value = 15;
obj2.value; // 15 cuz the have the same reference
obj3.value; //10
obj1 === obj3; //false - they have diff. allocation in memory having diff address or reference

// array(data structure) are object(also data structure for large and complex data) at the end
[] === []; // will retrun 'false', check in console
[1] === [1]; //false

//Context vs scope
// 'this' reffer to window object if not in the scope. Is used during instantiation
console.log(this);
console.log(this === window); //ture
this.alert(5); // window.aleart(5) will produce same result

const obj4 = {
  a: function() {
    console.log(this);
  }
};
obj4.a();

//Instantiation - to make multiple copies of object that share the limiler properties. 
class Player {
  constructor(name, type){
    console.log('Player', this)
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Palyer2 extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('player2', this);
  }

  play() {
    console.log(`I am a ${this.type}`);
  }
}

const plr = new Palyer2('aaa', 'sss');
const plrr = new Palyer2('ggg', 'seess');


// pass by value -Obj - copping the value and put it somewhere in memory
var a = 5; //  5 stored somewhere in memory(heap or stack) and a has the reference.
var b = a; //  value of a is coppied to the store of b in the memory, means it pass by value
b++;
console.log(b); // b value will be 6, but a is still 5. 

// pass by reference - we save the space in memory by avoiding copy/clone. Cons is to changed the property of the ref. obj by mistake. 
let obj1 = {name: 'abc', pass: 123};
let obj2 = obj1; // obj2 also has the same reference of obj1. It doesnt copy the value rather the ref in the memory. 
obj1 === obj2;
obj2.pass = 456; 
// Since it has the same ref. of obj1, modifying the properties of obj2 modifies the obj1 property. 

//clonning obj to new obj
let obj3 = {a: 'a', b:'b', c:'c'};
let objCpyObj3 = obj3; //coppying, means same ref. 
//let objClnObj3 = Object.assign({}, obj3); // clonning into new obj, not same ref 
let objClnObj3Sprd = {...obj3}; // clonning es6 way
let obj3.c = 'z';
console.log(objClnObj3); // changing c value in obj3 will not affect the clonned obj3 as long as there's one level of object (not like object inside obj)

let objCmplx = {a: 'a', b:'b', c:{deep: 'try and copy/clone me'}};
let objCmplxCln = {...objCmplx}; // shallow clonning, means only first level of obj is cloned
//how can we clone insdie obj. deep?
let superClone = JSON.parse(JSON.stringify(objCmplx)); // deep clone along with objCmplx as it is
let objCmplxCpy = objCmplx;
objCmplxCpy.c.deep = 'deep value changing';


//array
var c = [1,2,3,4,5];
var d = c;
d.push(6); 
//var d = {...c}; //spread operator
console.log(d);  
console.log(c);  
// d and c will have the same array added 6 cuz array is also object, they pass by ref.  
var e = [].concat(c); //clonning
e.push(7,8,9);
// when we wanna have new array with that includes c array