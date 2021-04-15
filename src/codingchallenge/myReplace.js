function myReplace(str, before, after) {
    //check  
    const strAr = str.split(" ");
    const index = strAr.indexOf(before);
    return strAr.filter( e => {
        if(e===before)
        strAr.splice(index,1,after);
        return true;
    })

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")

// sol 2
function myReplace(str, before, after) {
    //check  
    const strAr = str.split(" ");
    return strAr.filter( e => {
        const index = strAr.indexOf(before);
        if(e===before)
        //console.log(strAr.indexOf(before))
        return strAr.splice(index,1,after);
        //e.replace(after)
    })
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")