// match string ending char
//my sol
function confirmEnding(str, target) {
   /*  if(str || target === "" || " "){
        return "invalid input"
    } *///check

    const lastChar = str.split("");
    //console.log(lastChar)
    if(str[lastChar.length-1] === target) {
        return true
    } else {
        return false
    }
}

confirmEnding("Bastian", "n")

//sol 2
function confirmEnding(str, target) {
    /*  if(str || target === "" || " "){
         return "invalid input"
     } *///check
     if(str.endsWith(target)) {
         return true;
     }
    return false;
 }
 
 confirmEnding("Bastian", "n")

//sol 3
function confirmEnding(str, target) {
    /*  if(str || target === "" || " "){
         return "invalid input"
     } *///check
     return str.endsWith(target)
 }
 
 confirmEnding("Bastian", "n")

 //sol 4 - substr *******************
 function confirmEnding(str, target) {
    /*  if(str || target === "" || " "){
         return "invalid input"
     } *///check
     //return str.substr(-1) === target
     return str.substr(-target.length) === target

 }
 
 confirmEnding("Bastian", "an")

 //sol 5 - slice *******************
 function confirmEnding(str, target) {
   return str.slice(-target.length) === target

 }
 
 confirmEnding("Bastian", "an")