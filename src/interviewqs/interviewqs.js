// 1. diff between 'var' and 'let' keywords

const { prototype } = require("parcel-bundler");

/* 
- var is in JS since the begning where let was introduced in es2015/es6. 
for example, if someone doenst upgrade her browser for years, let wont 
work here. 
- let has block and die end of block space where var has fn scope, die end of fn 
- varibale define with var get hoisted at the top of function where using let doesnt
 */
let x = function(){
    if(true) {
        //console.log(v); 
            // output: v is undefined which is not a err. Cuz its definition gets hoisted, not the value
        //console.log(l);
        var v = 2;
        var l = 1;
    }
    console.log(v);
    console.log(l); // output: l is not defined
}

// 2. diff between '==' and '===' keywords
/* 
- They both are comparison operator if the left right is equel. But the diff is, == compares only values 
(not the type) by converting the same type where as === check the type. 
*/
if('1' == 1) // true 
if('1' === 1) // false 

// 3. diff between 'let and 'const' keywords
/* 
- after the first assignment of value, reassging is not posible with const, but with let possible 
- with const, array can be modified but not reassign. Thats why, wehn using array or obj, it is a
good practice to use const not let so that I can not accidentally reassign value to it. 
*/
let l = 1;
l =2;
console.log(l)

const c = 1;
c = 2;
console.log(c);
//or
const c; // when c is defined, by default its value is assinged as c = undefined
c = 2;
console.log(c);
//with array 
const c =[1,2]
c.push(3);
c = [6,4] // is not possible 
console.log(c)

// 4. diff between null and undefined
/* 
- Both represent empty value but the diff is, when we define a variable without assigning a value,
it bydefault JS puts a placholder called undefined. But null we have to do it manually, not JS e.g.,
if there is a value that needs to be cleared up, we set it to null. Manually putting undefined is
possible but not reccomended.
- typeof(undefined) = undefined but typeof(null) = object
*/

// 5. Use of arrow function?
const profile = {
    firstname: '',
    lastname: '',
    setName: function(name) {
        let splitName = function(n){
            let nameArray = n.split(' ');
            this.firstname = nameArray[0]
            this.lastname = nameArray[1];
        }
        splitName(name)
    }  
}
profile.setName('asif hq');
console.log(profile.firstname); 
console.log(window.firstname);
/* will not work since inner fn is a regualer fn, not a constructor, it has its own this
which ref to window object, and here is the perfect use of arrow fn */
const profile = {
    firstname: '',
    lastname: '',
    setName: function(name) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstname = nameArray[0]
            this.lastname = nameArray[1];
        }
        splitName(name)
    }  
}
profile.setName('asif hq');
console.log(profile.firstname); 
// now this ref to profile obj cuz it doesnt have its own this, it auto sets to profile obj

// 6. what is prototypal inheritance 
/* 
- Basically every Object has a property called prototype, where you can add methods and 
properties to it. When you create other object from the created object, the newly created 
object would automatically inherit the property of the parent but not by including its own
propety, instead, it uses from its parent prototype prop and methods. The way it works, when
you call a particular method of an object, it first look at its own properties, if not there,
it look into its parent properties.
*/ 
let car = function(model) {
    this.model = model;
} 
car.prototype.getModel = function() {
    return this.model;
} // this protype is not part of car constructor basiclly, its outside and we can attact method to it

let toyota = new car('toyota');
console.log(toyota.getModel());

// 7. Function declaration vs function expression
function car(model) {
    this.model=model;
} // declaring function in this way called function expression which get hoisted

let car = function(model) {
    this.model = model;
} // declaring function in this way called function expression which doesnt get hoisted
