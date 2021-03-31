function largestOfArr(arr) {
    if(arr === []) {
        return arr;
    } //check

    var maxes = [];
    for( var i=0; i<arr.length; i++) {
        var innerMax = maxItem(arr[i])
        maxes.push(innerMax);
    }
    return maxes;
}

function maxItem(arr2) {
    var max = arr2[0];
    for (var i=0; i<arr2.length; i++) {
        if(arr2[i] > max) 
        max = arr2[i];
    }
    return max
}

largestOfArr([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])



//Sol 2
function largestOfArr(arr) {
    if(arr === []) {
        return arr1;
    }
    //check

    var max = [];
    arr.map( eachArr => {
        var maxItem = eachArr[0];
        eachArr.map( eachItem => {
            if(eachItem > maxItem) {
                maxItem = eachItem
                max.push(maxItem)
            }
        })
    })
    return max;
}

largestOfArr([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])