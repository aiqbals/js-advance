function destroyer(arr) {
    //check 
    if(arr.length == 0) return arr;
    
    const args = Array.from(arguments)
    //console.log(args);
    /* arr.map(e => {
        if(!arr.includes(arguments)) {
            return rmv.push(arguments)
        }
    }) */
    args.splice(0,1);
    let target = args;
    let result = [];
    for(var num of arr) {
        if(target.indexOf(num)===-1) {
            result.push(num);
        }
    }
    return result;
}
destroyer([1,2,3,1,2,3], 2,3);

//solution 2

function destroyer(arr) {
    //check 
    if(arr.length == 0) return arr;
    
    const args = Array.from(arguments)
    args.splice(0,1);
    let target = args; //rest of the array el after splice
    
    return arr.filter( e => {
        return target.indexOf(e) === -1;
        //return !target.includes(e);
    })
}
destroyer([1,2,3,1,2,3], 2,3);