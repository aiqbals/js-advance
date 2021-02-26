function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();


function clsr(n){
    return function(m) {
        return n + m;
    }
}

let a = clsr(2);
a(3);
let b = clsr(5);
b(5);

function clsr2(){
    var counter = 0;

    return function() {
       return counter++;
    }

}
let c = clsr2();
c();
c();
c();
let d = clsr2();
d();
d();
d();