function longestword(str) {
    //check

    var longestwrd = "";
    var words = str.split(" ")
    //console.log(words)

    //for( var eachwrd of words)
    words.map(eachwrd => {
        //console.log(eachwrd)
        eachwrd.length > longestwrd.length ?
            longestwrd = eachwrd : false
    })
    //return longestwrd;
    return longestwrd.length;
}

longestword("My name is Asif and I was born in Bangladesh")


//sol 2
function longestword(str) {
    //check

    return str.split(" ").sort( (a,b) => {
        return b.length - a.length
    })[0];
}

longestword("My name is Asif and I was born in Bangladesh")