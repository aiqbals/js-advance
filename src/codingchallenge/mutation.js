function mutation(arr) {
    if(arr.length <= 0 || arr.length === 1 || arr.length > 2) return 'it must have array length of 2';

    for(var letter of arr[1]) {
        if(!arr[0].toLowerCase().includes(letter.toLowerCase())) return false;
    }
    /* for(var letter of secondtStr) {
        if(!firstStr.includes(letter)) return false;
    } */ //works as well

    return true;
}
mutation(["hello", "hey"])

//sol 2
function mutation(arr) {
    if(arr.length <= 0 || arr.length === 1 || arr.length > 2) return 'it must have array length of 2';

    var firstStr = arr[0].toLowerCase();
    var secondtStr = arr[1].toLowerCase();

    for(var i=0; i<secondtStr.length; i++) {
        if(firstStr.indexOf(secondtStr[i]) === -1) return false;
        //for non-exist letter, compiler return -1
    }
    /* for(var letter of secondtStr) {
        if(firstStr.indexOf(letter) === -1) return false
    } */ //works as well

    return true;
}
mutation(["hello", "hey"])