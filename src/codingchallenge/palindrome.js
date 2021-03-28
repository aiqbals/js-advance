function palindrome(str) {
    var regX = /[\W_]/g; //pattern of regular expression in the string
    var smallStr = str.toLowerCase().replace(regX, ""); //remove regX

    //var reversed = str.split("").reverse().join("");
    var reversed = smallStr.split("").reverse().join("");
    //console.log(reversed)

    if(reversed === str)
    return true;

    return false;
}

palindrome("eye")
palindrome("racecar_")