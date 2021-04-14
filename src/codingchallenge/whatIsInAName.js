function whatIsInAName(collection, source) {
    //check 

    let keys = Object.keys(source);
    //console.log(keys)
    /* Object.keys(collection).forEach( element => {
        if(element.hasOwnProperty(keys)) 
        return arr.push(element)
    }) */
    return collection.filter( obj => {
        for(var key of keys) {
            //console.log(key)
            if(!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false
            }
        }
        return true
    })

}
whatIsInAName([{ first: "Azief", last: "Hoque"}, { first: "Aydin", last: null}, { first: "Lany", last:"Pinky"}], {last: "Pinky"});