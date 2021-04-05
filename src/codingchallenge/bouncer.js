//Falsy value in JS - false, null, 0, "", undefined, NaN
//if("") console.log('not falsy') // will output undefined, but if there is truthy val, it works

function bouncer(arr) {
    
    /* const fltr = [];
    arr.filter( e => {
        if(!e === false || null || 0 || "" || undefined || NaN) {
            fltr.push(e)
        }
    })
    return fltr; */

    return arr.filter(e => {
        return e
        // if element is truty val, it will return the array with truthy val
    })

}
bouncer([7, "ate", "", false, 9]);

//sol 2
function bouncer(arr) {
    const truthies = [];

    for(var item of arr) {
        if(item)
        truthies.push(item)
    }

    return truthies;
}
bouncer([7, "ate", "", false, 9]);
