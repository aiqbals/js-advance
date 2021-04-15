function myReplace(str, before, after) {
    //check  
    const strAr = str.split(" ");
    const index = strAr.indexOf(before);
    strAr.filter( e => {
        if(e===before)
        strAr.splice(index,1,after)
    })
    return strAr
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")

// sol 2
function myReplace(str, before, after) {
    //check  
    let strAr = str.split(" ");

    for(var el of strAr) {
        if(el==before)
        strAr.splice(strAr.indexOf(before), 1, after)
    }
    return strAr
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")