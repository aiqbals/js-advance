function mutation(arr) {
    if(arr.length <= 0 || arr.length === 1 || arr.length > 2) return 'it must have array length of 2';


    return arr;
}
mutation(["hello", "hey"])