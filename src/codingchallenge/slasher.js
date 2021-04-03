function slasher(arr, howMany) {
    //check
    if(arr.length === 0) return 'not enough element to chop';
    //if(arr.length < howMany) return 'large chopping size';
    if(arr.length < howMany) {
        arr.splice(0)
    } else {
        arr.splice(0, howMany);
    }
    return arr;
}
slasher([1,2,3], 2)