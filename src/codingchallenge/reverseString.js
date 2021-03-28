// reverse string
//Sol 1. 
function rvrsStr(arg){
    var final = "";
    for(var i = arg.length-1; i>=0; i--){
        final += arg[i];
    }
    return final;
}

rvrsStr("Asif")
"fisA"

//Sol 2. - using builtin funciton
var str = “Bangladesh”;
str.split(“”).reverse().join(“”);