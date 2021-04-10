function diffArray(ar1, ar2) {
    //check input
    const combined = ar1.concat(ar2);

    return combined.filter( el => {
        if(ar1.indexOf(el) === -1 || ar2.indexOf(el) === -1) return el;
    })
}
diffArray([1,2,3,5],[1,2,3,4,5])

// sol 2
function diffArray(ar1, ar2) {
    //check input
    const symmetricAr = [];

    for(var i=0; i<ar1.length; i++) {
        //console.log(ar1[i]);
        if(ar2.indexOf(ar1[i]) === -1) {
            symmetricAr.push(ar1[i]);
        }
    }

    for(var i=0; i<ar2.length; i++) {
        //console.log(ar1[i]);
        if(ar1.indexOf(ar2[i]) === -1) {
            symmetricAr.push(ar2[i]);
        }
    }

    return symmetricAr;
}
diffArray([1,2,3,5],[1,2,3,4,5])