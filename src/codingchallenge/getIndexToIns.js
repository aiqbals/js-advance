function getIndexToIns(arr, num) {
    //check
    arr.sort( (a,b) => {
        return a-b //accending order
    }); // sort ['a','c','b', 19, 2] -- JS sort alphabetically and it counts the first digit, so 19 comes first.
    
    /* return arr.filter(e => {
        if (num <= e) {
            return arr.indexOf(e)
        }
    }) */
    for(var i = 0; i < arr.length; i++) {
        if(num <= arr[i]) {
            return i;
        }
    }
    return arr.length
}
getIndexToIns([40, 60], 50);