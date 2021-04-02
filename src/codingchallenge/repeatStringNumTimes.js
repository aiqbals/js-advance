function repeatStringNumTimes(str, num) {
    //check
    if(num < 0) return "";
    return str.repeat(num);
}
repeatStringNumTimes("abc", 3)