// diff between 'var' and 'let' keywords
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