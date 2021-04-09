function rot13(str) {
    //check input validty
    var solved = "";
    for(var i =0; i < str.length; i++) {
        var asciiNum = str[i].charCodeAt()
        //console.log(asciiNum)
        if(asciiNum >= 65 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum + 13);
        }
    }
    return solved;
}

rot13("AZ")
//rot13("SERR PBQR PNZC")