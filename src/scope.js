
// ternary operator
function isValid(bool) {
    return bool;
}
var test = isValid(true) ? "Access granted" : "You need permission";
console.log(test);

// switch statement
function switchTest(way) {
    var whichWay;

    switch (way) {
        case "righ":
            whichWay = "Go to right";
            break;
        case "left":
            whichWay = "Go to left";
            break;
        case "top":
            whichWay = "Go to sky";
            break;
        case "bottom":
            whichWay = "Go to sky";
            break;
        default: 
        whichWay = "Please enter valid direction";
    }
    return whichWay;
}

// ES6 - template litereal
//const name = "a";
//const age = 30;
//const greet = "My name is " + name + "and my age is " + age;
//const greet = `My name is: ${name} and my age is: ${age}`;
const greetFn = (name='', age = 20) => `My name is: ${name} and my age is: ${age}`;
//we gave parameter default value here. Otherwise,
greetFn('Asif', 30);

/* 
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// 5


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}// 5

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
} // test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a); */
