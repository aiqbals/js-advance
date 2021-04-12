function convert2roman(num) {
    //check 
    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var roman = "";

    for(var key  in romanToNum) {
        //console.log(key) // key
        //console.log(romanToNum[key]) //value
        while(num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key];
        }
    }
    return roman;
}
convert2roman(36)