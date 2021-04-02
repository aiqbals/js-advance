function repeatStringNumTimes(str, num) {
    //check
    if(num < 0) return "";
    return str.repeat(num);
}
repeatStringNumTimes("abc", 3)

// sol 2
function repeatStringNumTimes(str, num) {
    //check
    if(num < 0) return "";

    var final = "";
    for(var i=0; i<num; i++){
        final += str;
    }
    return final;
}
repeatStringNumTimes("abc", 3)

//sol 3 - recursion 
function repeatStringNumTimes(str, num) { 
    //check
    if(num < 0) return "";

    if(num === 1) return str; //base case
    return str + repeatStringNumTimes(str, num - 1)
}
repeatStringNumTimes("abc", 3)