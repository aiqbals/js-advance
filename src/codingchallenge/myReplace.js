function myReplace(str, before, after) {
    //check  
    const strAr = str.split(" ");
    strAr.filter( e => {
        if(e===before)
        e.replace(after)
    })
    return strAr;

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")