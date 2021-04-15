function myReplace(str, before, after) {
    //check 
    if(before[0]===before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    
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
    if(before[0]===before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }

    let strAr = str.split(" ");
    for(var el of strAr) {
        if(el==before)
        strAr.splice(strAr.indexOf(before), 1, after)
    }
    return strAr
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")

//sol 3
function myReplace(str, before, after) {
    //check  
    if(before[0]===before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    return str.replace(before, after)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")